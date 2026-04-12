import ParticleField from './components/ParticleField'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

function Divider() {
  return (
    <div
      style={{
        height: '0.5px',
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.15), rgba(167,139,250,0.1), transparent)',
        margin: '0 2.5rem',
      }}
    />
  )
}

function Footer() {
  return (
    <footer
      className="text-center py-8 px-6 relative z-10"
      style={{ borderTop: '0.5px solid rgba(255,255,255,0.05)' }}
    >
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#3f3f46' }}>
        <span style={{ color: '#00d4ff' }}>Aakash Sharma</span> · GenAI Engineer · Delhi 2026 · Built with React + Vite
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div 
        style={{
          position: 'fixed', zIndex: 0, pointerEvents: 'none',
          width: '600px', height: '600px', borderRadius: '50%',
          top: '-120px', right: '-100px',
          background: 'transparent',
          boxShadow: '0 0 120px 80px rgba(0,212,255,0.055) inset, 0 0 120px 80px rgba(0,212,255,0.05)',
          animation: 'orbFloat1 22s ease-in-out infinite'
        }}
      />
      <div 
        style={{
          position: 'fixed', zIndex: 0, pointerEvents: 'none',
          width: '450px', height: '450px', borderRadius: '50%',
          bottom: '-100px', left: '-80px',
          background: 'transparent',
          boxShadow: '0 0 100px 70px rgba(167,139,250,0.06) inset, 0 0 100px 70px rgba(167,139,250,0.05)',
          animation: 'orbFloat2 28s ease-in-out infinite'
        }}
      />
      <div 
        style={{
          position: 'fixed', zIndex: 0, pointerEvents: 'none',
          width: '300px', height: '300px', borderRadius: '50%',
          top: '35%', left: '30%',
          background: 'transparent',
          boxShadow: '0 0 80px 50px rgba(0,212,255,0.03) inset, 0 0 80px 50px rgba(0,212,255,0.02)',
          animation: 'orbFloat3 16s ease-in-out infinite'
        }}
      />
      <div 
        style={{
          position: 'fixed', zIndex: 0, pointerEvents: 'none',
          width: '200px', height: '200px', borderRadius: '50%',
          top: '60%', right: '20%',
          background: 'transparent',
          boxShadow: '0 0 70px 40px rgba(245,158,11,0.04) inset, 0 0 70px 40px rgba(245,158,11,0.03)',
          animation: 'orbFloat4 20s ease-in-out infinite'
        }}
      />

      <ParticleField />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
