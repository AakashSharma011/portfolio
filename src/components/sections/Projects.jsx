import { useRef } from 'react'
import { projects } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

function ProjectCard({ project, featured = false, index }) {
  const cardRef = useScrollReveal()

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const w = rect.width
    const h = rect.height

    // Disable 3D tilt on touch devices
    if ('ontouchstart' in window) return
    
    const rx = -((y - h / 2) / h) * 12
    const ry = ((x - w / 2) / w) * 12

    cardRef.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`
    cardRef.current.style.setProperty('--mx', `${(x / w) * 100}%`)
    cardRef.current.style.setProperty('--my', `${(y / h) * 100}%`)
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div
      ref={cardRef}
      className={`project-card rounded-xl p-6 md:p-8 flex flex-col justify-between ${
        featured ? 'lg:col-span-2' : ''
      }`}
      style={{
        backgroundColor: 'rgba(8,8,8,0.9)',
        border: '0.5px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, box-shadow 0.3s',
        borderColor: featured ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.06)',
        minHeight: featured ? 'auto' : '380px',
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative z-10 flex flex-col h-full ${featured ? 'lg:block' : ''}`}>
        <div className="flex flex-wrapjustify-between items-start mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              {featured && (
                <div
                  className="inline-flex items-center gap-1.5 font-mono"
                  style={{
                    color: '#00d4ff',
                    border: '0.5px solid #00d4ff',
                    background: 'rgba(0,212,255,0.07)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '99px',
                    fontSize: '0.65rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] live-pulse" />
                  ◉ LIVE IN PRODUCTION
                </div>
              )}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6rem',
                  color: '#3f3f46',
                  border: '0.5px solid rgba(255,255,255,0.07)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '99px',
                  textTransform: 'uppercase',
                }}
              >
                {project.tag}
              </span>
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              {project.name}
            </h3>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.84rem', color: '#a1a1aa', lineHeight: 1.6, maxWidth: '500px' }}>
              {project.description}
            </p>
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-all"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#00d4ff', textTransform: 'uppercase' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.textShadow = '0 0 12px #00d4ff' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#00d4ff'; e.currentTarget.style.textShadow = 'none' }}
              >
                <ExternalLink size={14} /> ↗ Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-all"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#00d4ff', textTransform: 'uppercase' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.textShadow = '0 0 12px #00d4ff' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#00d4ff'; e.currentTarget.style.textShadow = 'none' }}
              >
                <Github size={14} /> ⎇ GitHub
              </a>
            )}
          </div>
        </div>

        <div className="mt-auto flex flex-col md:flex-row gap-6 md:items-end justify-between">
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.58rem',
                  color: '#a1a1aa',
                  border: '0.5px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {featured && project.metrics && (
            <div
              className="grid grid-cols-2 gap-4 p-4 rounded-lg self-stretch lg:self-auto min-w-[200px] mt-6 lg:mt-0"
              style={{
                background: 'rgba(0,212,255,0.03)',
                border: '0.5px solid rgba(0,212,255,0.1)',
              }}
            >
              {[
                { label: 'Status', value: 'Live' },
                { label: 'Perf', value: '↑30%' },
                { label: 'Optimized', value: 'API' },
                { label: 'Deployed', value: 'Docker' }
              ].map(m => (
                <div key={m.label}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: '#00d4ff' }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#3f3f46', textTransform: 'uppercase' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useScrollReveal()

  return (
    <section id="projects" className="py-16 md:py-24 px-5 md:px-10 max-w-[1100px] mx-auto relative z-10">
      <div 
        ref={headerRef} 
        className="mb-12"
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00d4ff', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          // Selected Work
        </span>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 6vw, 3rem)', color: '#ffffff', marginTop: '0.5rem', marginBottom: '2rem' }}>
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.name} 
            project={project} 
            index={index}
            featured={index === 0} 
          />
        ))}
      </div>
    </section>
  )
}
