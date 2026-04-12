import { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function ProjectCard({ project, featured }) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = -((y - rect.height / 2) / rect.height) * 12
    const rotateY = ((x - rect.width / 2) / rect.width) * 12

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
    el.style.setProperty('--mx', `${(x / rect.width) * 100}%`)
    el.style.setProperty('--my', `${(y / rect.height) * 100}%`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
    el.style.transition = 'transform 0.5s ease'
    setTimeout(() => {
      if (el) el.style.transition = ''
    }, 500)
  }, [])

  const isLive = project.tag === 'LIVE IN PRODUCTION'

  return (
    <motion.div
      variants={cardVariants}
      className={featured ? 'md:col-span-2' : ''}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card card rounded-lg p-6 md:p-8 h-full"
        style={{
          background: 'rgba(10,26,14,0.75)',
          border: '0.5px solid rgba(0,255,136,0.1)',
          backdropFilter: 'blur(16px)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(0,255,136,0.25)'
          e.currentTarget.style.boxShadow = '0 25px 70px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,136,0.08)'
        }}
        onMouseLeaveCapture={(e) => {
          e.currentTarget.style.borderColor = 'rgba(0,255,136,0.1)'
          e.currentTarget.style.boxShadow = 'none'
        }}
        data-hover
      >
        <div className={`relative z-10 ${featured ? 'grid md:grid-cols-[1fr_280px] gap-8' : ''}`}>
          {/* Content */}
          <div>
            {/* Tag Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] px-3 py-1 rounded-sm
                  ${isLive
                    ? 'border border-accent bg-[rgba(0,255,136,0.08)] text-accent live-pulse'
                    : 'border border-[rgba(0,255,136,0.2)] bg-[rgba(0,255,136,0.04)] text-text-2'
                  }`}
              >
                {isLive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                )}
                {project.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-xl md:text-2xl text-text-1 mb-1">
              {project.name}
            </h3>
            <p className="font-mono text-[0.72rem] text-text-3 mb-4">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="font-body text-[0.92rem] text-text-2 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.62rem] px-2.5 py-1 rounded-sm text-text-2"
                  style={{
                    background: 'rgba(0,255,136,0.04)',
                    border: '0.5px solid rgba(0,255,136,0.15)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase text-accent hover:text-text-1 transition-colors"
                  style={{ textShadow: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.textShadow = '0 0 10px #00ff88' }}
                  onMouseLeave={(e) => { e.currentTarget.style.textShadow = 'none' }}
                  data-hover
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase text-accent hover:text-text-1 transition-colors"
                  style={{ textShadow: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.textShadow = '0 0 10px #00ff88' }}
                  onMouseLeave={(e) => { e.currentTarget.style.textShadow = 'none' }}
                  data-hover
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Metrics Grid — Featured Only */}
          {featured && project.metrics && (
            <div
              className="grid grid-cols-2 gap-3 self-center"
              style={{
                background: 'rgba(0,255,136,0.03)',
                border: '0.5px solid rgba(0,255,136,0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
              }}
            >
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center py-3">
                  <div className="font-display font-black text-2xl gradient-text mb-1">
                    {m.val}
                  </div>
                  <div className="font-mono text-[0.6rem] text-text-3 uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
