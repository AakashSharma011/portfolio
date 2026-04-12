import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function SectionLabel({ label, title }) {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className="mb-16">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent block mb-3">
        // {label}
      </span>
      <h2 className="font-display font-extrabold text-3xl md:text-[3.5rem] text-text-1 leading-tight">
        {title}
      </h2>
    </div>
  )
}
