import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 130
const CONNECT_DIST = 90
const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST
const MOUSE_RADIUS = 150
const MAX_SPEED = 4.0
const DAMPING = 0.988

const COLOR_POOL = [
  { col: 'rgba(0,212,255,', weight: 35 },
  { col: 'rgba(167,139,250,', weight: 25 },
  { col: 'rgba(0,168,204,', weight: 15 },
  { col: 'rgba(245,158,11,', weight: 12 },
  { col: 'rgba(255,255,255,', weight: 8 },
  { col: 'rgba(124,58,237,', weight: 5 },
]

function pickColor() {
  const total = COLOR_POOL.reduce((s, c) => s + c.weight, 0)
  let r = Math.random() * total
  for (const c of COLOR_POOL) {
    r -= c.weight
    if (r <= 0) return c.col
  }
  return COLOR_POOL[0].col
}

function createParticle(W, H) {
  const angle = Math.random() * Math.PI * 2
  const speed = 0.2 + Math.random() * 0.8
  const r = 0.5 + Math.random() * 2.1 // 0.5 to 2.6px
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r,
    mass: r * r,
    col: pickColor(),
    alpha: 0.3 + Math.random() * 0.55,
    pulsePhase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.02,
  }
}

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const mouse = { x: -9999, y: -9999 }
    const particles = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(W, H))
    }

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)

    let rafId

    function frame() {
      ctx.clearRect(0, 0, W, H)

      const isMobile = W < 768
      const mobileParticleCount = 60
      const currentParticleCount = isMobile ? mobileParticleCount : PARTICLE_COUNT

      // If particle count changed (e.g. on resize), we could handle it, 
      // but for simplicity we'll just use the initial or current count if we re-init.
      // However, the requested fix is to reduce particles. 
      // I'll adjust the loop to only process the first 'currentParticleCount' particles.

      const activeLen = Math.min(len, currentParticleCount)

      for (let i = 0; i < activeLen; i++) {
        const p = particles[i]

        const dmx = p.x - mouse.x
        const dmy = p.y - mouse.y
        const dMouse = Math.sqrt(dmx * dmx + dmy * dmy)
        if (dMouse < MOUSE_RADIUS && dMouse > 0.1) {
          const force = ((MOUSE_RADIUS - dMouse) / MOUSE_RADIUS) * 2.0
          p.vx += (dmx / dMouse) * force * 0.1
          p.vy += (dmy / dMouse) * force * 0.1
        }

        for (let j = i + 1; j < activeLen; j++) {
          const q = particles[j]
          const dx = q.x - p.x
          const dy = q.y - p.y
          const distSq = dx * dx + dy * dy
          const minDist = p.r + q.r + 0.5

          if (distSq < minDist * minDist) {
            const dist = Math.sqrt(distSq) || 0.01
            const nx = dx / dist
            const ny = dy / dist

            const overlap = (minDist - dist) * 0.5
            const totalMass = p.mass + q.mass
            p.x -= nx * overlap * (q.mass / totalMass)
            p.y -= ny * overlap * (q.mass / totalMass)
            q.x += nx * overlap * (p.mass / totalMass)
            q.y += ny * overlap * (p.mass / totalMass)

            const dvx = p.vx - q.vx
            const dvy = p.vy - q.vy
            const dot = dvx * nx + dvy * ny

            if (dot > 0) {
              const impulse = (2 * dot) / totalMass
              p.vx -= impulse * q.mass * nx * 0.82
              p.vy -= impulse * q.mass * ny * 0.82
              q.vx += impulse * p.mass * nx * 0.82
              q.vy += impulse * p.mass * ny * 0.82
            }
          }
        }

        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > MAX_SPEED) {
          const scale = MAX_SPEED / spd
          p.vx *= scale
          p.vy *= scale
        } else if (spd < 0.08) {
          p.vx += (Math.random() - 0.5) * 0.3
          p.vy += (Math.random() - 0.5) * 0.3
        }

        p.vx *= DAMPING
        p.vy *= DAMPING

        p.x += p.vx
        p.y += p.vy

        if (p.x - p.r < 0) { p.vx = Math.abs(p.vx); p.x = p.r }
        if (p.x + p.r > W) { p.vx = -Math.abs(p.vx); p.x = W - p.r }
        if (p.y - p.r < 0) { p.vy = Math.abs(p.vy); p.y = p.r }
        if (p.y + p.r > H) { p.vy = -Math.abs(p.vy); p.y = H - p.r }
      }

      // Skip lines on mobile
      if (!isMobile) {
        ctx.lineWidth = 0.35
        for (let i = 0; i < activeLen; i++) {
          const p = particles[i]
          for (let j = i + 1; j < activeLen; j++) {
            const q = particles[j]
            const dx = p.x - q.x
            const dy = p.y - q.y
            const distSq = dx * dx + dy * dy
            if (distSq < CONNECT_DIST_SQ) {
              const lineAlpha = (1 - distSq / CONNECT_DIST_SQ) * 0.07
              ctx.strokeStyle = `rgba(0,212,255,${lineAlpha})`
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(q.x, q.y)
              ctx.stroke()
            }
          }
        }
      }

      for (let i = 0; i < activeLen; i++) {
        const p = particles[i]
        const finalAlpha = Math.max(0.05, Math.min(1, p.alpha + Math.sin(p.pulsePhase) * 0.25))
        p.pulsePhase += p.pulseSpeed

        ctx.save()
        // Reduce shadowBlur on mobile
        ctx.shadowBlur = isMobile ? p.r * 2 : p.r * 6
        ctx.shadowColor = p.col + '0.9)'
        ctx.fillStyle = p.col + finalAlpha + ')'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }


      rafId = requestAnimationFrame(frame)
    }

    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.9,
        width: '100%',
        height: '100%',
      }}
    />
  )
}
