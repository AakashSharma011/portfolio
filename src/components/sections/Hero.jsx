import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { person } from '../../data/portfolio'
import Typewriter from '../ui/Typewriter'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = { delay: 0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom.delay, 
      duration: custom.duration || 0.8, 
      ease: custom.ease || [0.16, 1, 0.3, 1] 
    },
  }),
}

export default function Hero() {
  const heroRef = useRef(null)
  const nameRef = useRef(null)
  const roleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (nameRef.current) {
        const text = nameRef.current.textContent
        nameRef.current.innerHTML = ''
        text.split('').forEach((char) => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char
          span.style.display = 'inline-block'
          span.style.opacity = '0'
          span.style.transform = 'translateY(40px)'
          nameRef.current.appendChild(span)
        })

        gsap.to(nameRef.current.children, {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.25,
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex items-center min-h-screen hero-responsive-padding"
      style={{ padding: 'clamp(5rem, 10vw, 9rem) clamp(1.2rem, 5vw, 3rem) 3rem' }}
    >
      <div className="w-full max-w-[1100px] mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 font-mono"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem',
            color: '#00d4ff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            border: '0.5px solid rgba(0,212,255,0.25)',
            background: 'rgba(0,212,255,0.05)',
            padding: '0.4rem 1rem',
            marginBottom: '2rem',
            borderRadius: '0.125rem',
          }}
        >
          <span style={{ fontSize: 'clamp(0.6rem, 2vw, 0.68rem)', whiteSpace: 'normal' }}>
            ◉ Available for GenAI Roles · Delhi NCR
          </span>
        </motion.div>

        <h1
          ref={nameRef}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 8vw, 5.2rem)',
            whiteSpace: 'normal',
            lineHeight: 1.1,
            marginBottom: '0.8rem',
          }}
        >
          {person.name}
        </h1>

        <motion.h2
          ref={roleRef}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.4rem, 6vw, 3rem)',
            background: 'linear-gradient(135deg, #00d4ff 0%, #a78bfa 55%, #f59e0b 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 5s linear infinite',
            lineHeight: 1.2,
            marginBottom: '2rem',
          }}
        >
          {person.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.78rem, 1.4vw, 0.95rem)',
            color: '#00d4ff',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typewriter 
            phrases={[
              "Building RAG Pipelines & AI Agents",
              "Turning LLMs into Production Systems",
              "FastAPI + Docker + LangChain",
              "Systems That Actually Ship"
            ]}
            speed={65}
            deleteSpeed={28}
            pauseMs={1800}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
            color: '#a1a1aa',
            maxWidth: '100%',
            lineHeight: 1.9,
            marginBottom: '2.5rem',
          }}
        >
          Rank-1 ECE Graduate building intelligent systems with LLMs,
          RAG architectures, and AI agents. Full ML lifecycle — 
          from data to deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, boxShadow: '0 0 45px rgba(0,212,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center font-body transition-colors w-full sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #00a8cc)',
              color: '#000',
              fontWeight: 700,
              padding: '0.9rem 2rem',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
              textAlign: 'center'
            }}
          >
            View Projects →
          </motion.a>
          <motion.a
            href="/Akash_CV.pdf"
            download="Aakash_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: 'rgba(0,212,255,0.08)', borderColor: 'rgba(0,212,255,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center font-body transition-colors w-full sm:w-auto"
            style={{
              background: 'transparent',
              border: '1px solid rgba(0,212,255,0.25)',
              color: '#00d4ff',
              padding: '0.9rem 2rem',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
              textAlign: 'center'
            }}
          >
            Download Resume ↓
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-6 sm:gap-[2.5rem] mt-[3.5rem]">
          {[
            { num: "4+", label: "AI Projects", color: "#00d4ff" },
            { num: "9.03", label: "CGPA Rank-1", color: "#a78bfa" },
            { num: "1", label: "Live Platform", color: "#f59e0b" },
            { num: "100+", label: "Students", color: "#00d4ff" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.1, duration: 0.6 }}
              style={{ paddingLeft: '1rem', borderLeft: `2px solid ${stat.color}` }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(1.6rem, 2.2vw, 2.1rem)',
                  color: stat.color,
                  lineHeight: 1.1,
                  marginBottom: '0.25rem',
                }}
              >
                {stat.num}
              </div>
              <div 
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6rem',
                  color: '#3f3f46',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span 
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem',
              color: '#3f3f46',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            scroll
          </span>
          <div 
            className="w-[1px] h-[55px] scroll-line origin-top" 
            style={{ background: 'linear-gradient(to bottom, transparent, #00d4ff)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
