import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 transition-colors duration-300"
      animate={{
        backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0)',
        backdropFilter: scrolled ? 'blur(28px)' : 'blur(0px)',
        borderBottom: scrolled
          ? '0.5px solid rgba(255,255,255,0.06)'
          : '0.5px solid rgba(255,255,255,0)',
      }}
      transition={{ duration: 0.35 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem' }}
        >
          <span style={{ color: '#00d4ff' }}>A</span>
          <span style={{ color: '#a1a1aa' }}>.sharma</span>
          <span style={{ color: '#3f3f46' }}>_</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#3f3f46',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#3f3f46' }}
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '0.5rem 1.2rem',
              border: '1px solid rgba(0,212,255,0.4)',
              color: '#00d4ff',
              background: 'transparent',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem',
              textTransform: 'uppercase',
              position: 'relative',
              overflow: 'hidden',
              display: 'inline-flex',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#000'
              if (e.currentTarget.firstChild) {
                e.currentTarget.firstChild.style.transform = 'scaleX(1)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#00d4ff'
              if (e.currentTarget.firstChild) {
                e.currentTarget.firstChild.style.transform = 'scaleX(0)'
              }
            }}
          >
            <span
              style={{
                content: '""',
                position: 'absolute',
                top: 0, bottom: 0, left: 0, right: 0,
                background: '#00d4ff',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease',
                zIndex: -1,
              }}
            />
            Hire Me
          </motion.a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1px] bg-[#00d4ff] transition-transform duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1px] bg-[#00d4ff] transition-opacity duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1px] bg-[#00d4ff] transition-transform duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden py-6 px-4 border-t"
          style={{
            borderColor: 'rgba(255,255,255,0.06)',
            backgroundColor: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(28px)',
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[#a1a1aa] hover:text-[#00d4ff] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[#00d4ff] font-mono text-[0.75rem] uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
