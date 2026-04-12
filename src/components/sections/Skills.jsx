import { useRef } from 'react'
import { skills } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { motion } from 'framer-motion'

function SkillTag({ name, hot, variant }) {
  if (hot || variant) {
    let color = '#00d4ff'
    let bg = 'rgba(0,212,255,0.07)'
    let border = 'rgba(0,212,255,0.3)'
    let shadow = 'rgba(0,212,255,0.12)'

    if (variant === 'violet') {
      color = '#a78bfa'
      bg = 'rgba(167,139,250,0.07)'
      border = 'rgba(167,139,250,0.3)'
      shadow = 'rgba(167,139,250,0.12)'
    } else if (variant === 'amber') {
      color = '#f59e0b'
      bg = 'rgba(245,158,11,0.06)'
      border = 'rgba(245,158,11,0.3)'
      shadow = 'rgba(245,158,11,0.12)'
    }

    return (
      <motion.div
        whileHover={{ scale: 1.06 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.78rem',
          padding: '0.3rem 0.75rem',
          borderRadius: '4px',
          border: `0.5px solid ${border}`,
          color: color,
          backgroundColor: bg,
          fontWeight: 600,
          boxShadow: `0 0 10px ${shadow}`,
          display: 'inline-block',
        }}
      >
        {name}
      </motion.div>
    )
  }

  return (
    <div
      className="skill-tag"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.78rem',
        color: '#a1a1aa',
        border: '0.5px solid rgba(255,255,255,0.07)',
        padding: '0.3rem 0.75rem',
        backgroundColor: 'transparent',
        borderRadius: '4px',
        display: 'inline-block',
        transition: 'color 0.25s ease',
      }}
    >
      {name}
    </div>
  )
}

function SkillGroup({ group, index }) {
  const cardRef = useScrollReveal()

  let titleColor = '#00d4ff'
  let variant = null
  
  if (group.group.includes('ML') || group.group.includes('Data')) {
    titleColor = '#a78bfa'
    variant = 'violet'
  } else if (group.group.includes('Certifications') || group.group.includes('Achieve')) {
    titleColor = '#f59e0b'
    variant = 'amber'
  }

  if (group.group.includes('Top')) {
    variant = 'cyan' // just ensure hot ones get cyan
  }

  return (
    <div
      ref={cardRef}
      className="p-6 md:p-8 rounded-xl"
      style={{
        backgroundColor: 'rgba(8,8,8,0.9)',
        border: '0.5px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        transition: 'border-color 0.3s, transform 0.3s',
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.15)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <h3
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.68rem',
          color: titleColor,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderBottom: '0.5px solid rgba(255,255,255,0.06)',
          paddingBottom: '0.75rem',
          marginBottom: '1rem',
        }}
      >
        {group.group}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {group.tags.map((item) => (
          <SkillTag
            key={item.label}
            name={item.label}
            hot={item.hot}
            variant={item.hot ? variant : null}
          />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const headerRef = useScrollReveal()

  return (
    <section id="skills" className="py-24 px-6 md:px-10 max-w-[1100px] mx-auto relative z-10">
      <div 
        ref={headerRef} 
        className="mb-12"
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00d4ff', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          // Technical Arsenal
        </span>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '3rem', color: '#ffffff', marginTop: '0.5rem' }}>
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <SkillGroup key={group.group} group={group} index={index} />
        ))}
      </div>
    </section>
  )
}
