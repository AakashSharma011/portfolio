import { useState, useEffect, useRef, useCallback } from 'react'

export default function Typewriter({ phrases, speed = 80, deleteSpeed = 40, pauseMs = 1800 }) {
  const [display, setDisplay] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIdx]

    if (!isDeleting) {
      // Typing
      const next = currentPhrase.substring(0, display.length + 1)
      setDisplay(next)

      if (next === currentPhrase) {
        // Pause before deleting
        timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseMs)
        return
      }

      timeoutRef.current = setTimeout(tick, speed + Math.random() * 40)
    } else {
      // Deleting
      const next = currentPhrase.substring(0, display.length - 1)
      setDisplay(next)

      if (next === '') {
        setIsDeleting(false)
        setPhraseIdx((prev) => (prev + 1) % phrases.length)
        timeoutRef.current = setTimeout(tick, 300)
        return
      }

      timeoutRef.current = setTimeout(tick, deleteSpeed)
    }
  }, [display, isDeleting, phraseIdx, phrases, speed, deleteSpeed, pauseMs])

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, speed)
    return () => clearTimeout(timeoutRef.current)
  }, [tick, speed])

  return (
    <span className="font-mono text-base md:text-lg text-accent">
      {display}
      <span className="blink-cursor ml-0.5">|</span>
    </span>
  )
}
