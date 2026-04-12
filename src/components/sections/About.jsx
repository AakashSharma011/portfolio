import { person } from '../../data/portfolio'
import Terminal from '../ui/Terminal'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { motion } from 'framer-motion'

export default function About() {
  const headerRef = useScrollReveal()
  const bioRef = useScrollReveal()
  const timelineRef = useScrollReveal()
  const terminalRef = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-[1100px] mx-auto relative z-10">
      <div 
        ref={headerRef} 
        className="mb-12"
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00d4ff', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          // About
        </span>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '3rem', color: '#ffffff', marginTop: '0.5rem' }}>
          Background
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div 
            ref={bioRef} 
            className="mb-12"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.98rem', color: '#a1a1aa', lineHeight: 1.95 }}
          >
            I'm a <span style={{ color: '#ffffff', fontWeight: 600 }}>GenAI Engineer</span> and recent B.Tech Rank-1 graduate,
            passionate about turning state-of-the-art LLMs into robust, production-ready systems.
            <br /><br />
            My focus bridges the gap between <span style={{ color: '#ffffff', fontWeight: 600 }}>machine learning theory</span> and <span style={{ color: '#ffffff', fontWeight: 600 }}>software engineering</span>. 
            I build intelligent agents, RAG architectures, and automated pipelines that deliver tangible value.
            <br /><br />
            When I'm not training models or optimizing APIs, I mentor students in data science and 
            explore the latest autonomous AI frameworks.
          </div>

          <div 
            ref={timelineRef} 
            className="relative pl-6"
          >
            {/* Timeline Line */}
            <div 
              className="absolute left-[3px] top-2 bottom-0 w-[1px]" 
              style={{ background: 'linear-gradient(to bottom, #00d4ff, transparent)' }} 
            />
            
            {person.experience.map((exp, i) => (
              <div key={i} className="mb-8 relative">
                {/* Timeline Dot */}
                <div 
                  className="absolute left-[-27px] top-1.5 rounded-full"
                  style={{
                    width: '8px',
                    height: '8px',
                    background: '#000',
                    border: '1px solid #00d4ff',
                    boxShadow: '0 0 10px rgba(0,212,255,0.5)',
                  }}
                />
                <h3 style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                  {exp.role}
                </h3>
                <div className="flex items-center gap-3 mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <span style={{ color: '#00d4ff', fontSize: '0.72rem' }}>{exp.company}</span>
                  <span style={{ color: '#3f3f46', fontSize: '0.65rem' }}>{exp.duration}</span>
                </div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.6 }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={terminalRef} 
          className="lg:mt-8"
        >
          <div 
            className="rounded-lg overflow-hidden flex flex-col"
            style={{
              backgroundColor: '#080808',
              border: '0.5px solid rgba(0,212,255,0.18)',
              boxShadow: '0 0 0 1px rgba(0,0,0,1), 0 30px 80px rgba(0,0,0,0.8), inset 0 0 30px rgba(0,212,255,0.02)',
              minHeight: '400px',
            }}
          >
            {/* Terminal Header */}
            <div 
              className="flex items-center px-4 py-3"
              style={{
                backgroundColor: 'rgba(0,212,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
              </div>
              <div 
                className="w-full text-center"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#3f3f46' }}
              >
                aakash@genai:~$
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              className="p-[1.5rem] flex-1"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                lineHeight: 2.1,
              }}
            >
              <Terminal 
                lines={[
                  { type: 'input', text: 'system.init()' },
                  { type: 'output', text: 'Booting Aakash Sharma v2.0...' },
                  { type: 'input', text: 'whoami' },
                  { type: 'output', text: 'GenAI Engineer | Rank-1 ECE Graduate' },
                  { type: 'input', text: 'cat skills.json --top' },
                  { type: 'output', text: '{ "core": ["RAG","LangChain","FastAPI","Docker"] }' },
                  { type: 'input', text: 'git log --oneline' },
                  { type: 'output', text: '4 projects | 1 live in production' },
                  { type: 'input', text: 'curl api/status' },
                  { type: 'output', text: '{ "open_to_work": true, "location": "Delhi NCR" }' }
                ]}
                delay={420}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
