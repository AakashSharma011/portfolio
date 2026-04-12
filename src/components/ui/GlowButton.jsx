import { motion } from 'framer-motion'

export default function GlowButton({ children, href, onClick, type = 'button', className = '' }) {
  const Comp = href ? 'a' : 'button'
  const props = href ? { href } : { type }

  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
      <Comp
        {...props}
        onClick={onClick}
        data-hover
        className={`relative inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.12em]
          px-5 py-2 border border-accent text-accent bg-transparent
          overflow-hidden transition-colors duration-300
          hover:text-bg-deepest hover:bg-accent
          ${className}`}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
        }}
      >
        {children}
      </Comp>
    </motion.div>
  )
}
