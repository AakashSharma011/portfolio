import React, { useState, useEffect } from 'react'

export default function Terminal({ lines, delay = 420 }) {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [visibleLines, lines.length, delay])

  return (
    <div>
      {lines.slice(0, visibleLines).map((line, idx) => (
        <div key={idx} className="flex gap-2">
          {line.type === 'input' ? (
            <>
              <span style={{ color: '#00d4ff' }}>❯</span>
              <span style={{ color: '#a1a1aa' }}>{line.text}</span>
            </>
          ) : (
            <>
              <span style={{ color: '#4ade80' }}>&gt;</span>
              <span style={{ color: '#4ade80' }}>{line.text}</span>
            </>
          )}
        </div>
      ))}
      <div className="flex gap-2 mt-1">
        <span style={{ color: '#00d4ff' }}>❯</span>
        <span 
          className="blink-cursor" 
          style={{ 
            display: 'inline-block',
            width: '8px', 
            height: '1em', 
            backgroundColor: '#00d4ff',
            marginTop: '0.2rem'
          }} 
        />
      </div>
    </div>
  )
}
