import { useRef } from 'react'
import { person } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download } from 'lucide-react'

export default function Contact() {
  const headerRef = useScrollReveal()

  return (
    <section id="contact" className="py-16 md:py-24 px-5 md:px-10 max-w-[1100px] mx-auto relative z-10">
      <div 
        ref={headerRef} 
        className="mb-16 text-center"
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00d4ff', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          // Get In Touch
        </span>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', color: '#ffffff', marginTop: '0.5rem', marginBottom: '2rem' }}>
          Let's Build <span style={{ color: 'transparent', WebkitTextFillColor: 'transparent', background: 'linear-gradient(135deg, #00d4ff, #a78bfa)', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>Something</span> Intelligent
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto relative">
        {/* Aurora Background for the container */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-3xl -z-10"
          style={{
            background: 'linear-gradient(120deg, rgba(0,212,255,0.04) 0%, rgba(167,139,250,0.05) 40%, rgba(0,212,255,0.03) 70%, rgba(245,158,11,0.03) 100%)',
            backgroundSize: '400% 400%',
            animation: 'aurora 16s ease-in-out infinite',
            filter: 'blur(8px)'
          }}
        />

        <div className="flex flex-col justify-center">
          <p 
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontSize: '1rem', 
              color: '#a1a1aa', 
              lineHeight: 1.9,
              marginBottom: '2rem' 
            }}
          >
            Currently seeking <span style={{ color: '#fff', fontWeight: 600 }}>GenAI Engineer</span> and <span style={{ color: '#fff', fontWeight: 600 }}>AI Engineer</span> roles 
            in Delhi/NCR. Open to remote and hybrid opportunities.
          </p>

          <div className="flex flex-col gap-4">
            <motion.a
              href={`mailto:${person.email}`}
              className="flex items-center gap-4 contact-link rounded-lg transition-colors"
              whileHover={{ x: 8 }}
              style={{
                backgroundColor: 'rgba(8,8,8,0.9)',
                border: '0.5px solid rgba(255,255,255,0.06)',
                padding: '0.85rem 1rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
            >
              <Mail color="#00d4ff" size={18} strokeWidth={1.5} />
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#3f3f46', textTransform: 'uppercase' }}>
                  Email
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.78rem', color: '#a1a1aa', wordBreak: 'break-all' }}>
                  {person.email}
                </div>
              </div>
            </motion.a>

            <motion.a
              href={person.linkedin.startsWith('http') ? person.linkedin : `https://${person.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 contact-link rounded-lg transition-colors"
              whileHover={{ x: 8 }}
              style={{
                backgroundColor: 'rgba(8,8,8,0.9)',
                border: '0.5px solid rgba(255,255,255,0.06)',
                padding: '1rem 1.2rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
            >
              <Linkedin color="#00d4ff" size={18} strokeWidth={1.5} />
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#3f3f46', textTransform: 'uppercase' }}>
                  LinkedIn
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.78rem', color: '#a1a1aa', wordBreak: 'break-all' }}>
                  {person.name}
                </div>
              </div>
            </motion.a>

            <motion.a
              href={person.github.startsWith('http') ? person.github : `https://${person.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 contact-link rounded-lg transition-colors"
              whileHover={{ x: 8 }}
              style={{
                backgroundColor: 'rgba(8,8,8,0.9)',
                border: '0.5px solid rgba(255,255,255,0.06)',
                padding: '1rem 1.2rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
            >
              <Github color="#00d4ff" size={18} strokeWidth={1.5} />
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#3f3f46', textTransform: 'uppercase' }}>
                  GitHub
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.78rem', color: '#a1a1aa', wordBreak: 'break-all' }}>
                  AakashSharma011
                </div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Resume Card */}
        <div className="flex justify-center items-center">
          <div 
            className="w-full relative rounded-2xl overflow-hidden p-[1px] flex"
            style={{
              backgroundColor: 'rgba(8,8,8,0.95)',
              border: '0.5px solid rgba(0,212,255,0.15)',
              minHeight: '280px',
            }}
          >
            {/* Rotating Border */}
            <div 
              className="absolute inset-[-50%] -z-10"
              style={{
                background: 'conic-gradient(from 0deg, transparent 320deg, rgba(0,212,255,0.25) 345deg, rgba(167,139,250,0.2) 360deg)',
                animation: 'rotate-border 8s linear infinite'
              }}
            />

            <div 
              className="flex-1 rounded-2xl flex flex-col items-center justify-center text-center p-6 md:p-8 z-10"
              style={{ backgroundColor: 'rgba(8,8,8,0.97)' }}
            >
              <div 
                style={{ 
                  fontFamily: "'JetBrains Mono', monospace", 
                  fontSize: '0.68rem', 
                  color: '#3f3f46',
                  marginBottom: '1.5rem'
                }}
              >
                // Resume
              </div>
              <h3 
                style={{ 
                  fontFamily: "'Syne', sans-serif", 
                  fontWeight: 900, 
                  fontSize: '1.5rem', 
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}
              >
                Aakash Sharma
              </h3>
              <div 
                style={{ 
                  fontFamily: "'Space Grotesk', sans-serif", 
                  color: '#a1a1aa',
                  marginBottom: '1rem'
                }}
              >
                GenAI Engineer · AI ML Developer
              </div>
              <div 
                style={{ 
                  fontFamily: "'JetBrains Mono', monospace", 
                  fontSize: '0.68rem', 
                  color: '#3f3f46',
                  marginBottom: '2.5rem'
                }}
              >
                B.Tech ECE · Rank 1 · MAIT · 2026
              </div>

              <motion.a
                href="/Akash_CV.pdf"
                download="Aakash_Sharma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0,212,255,0.4)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #a78bfa)',
                  color: '#000',
                  fontWeight: 700,
                  padding: '0.8rem 1.8rem',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.85rem'
                }}
              >
                <Download size={18} /> Download Resume
              </motion.a>
              
              <div className="mt-6 text-[0.6rem] text-[#3f3f46] font-mono tracking-widest uppercase">
                PDF · ATS-Optimized · Updated 2026
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
