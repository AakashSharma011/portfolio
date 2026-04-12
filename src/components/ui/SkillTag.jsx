import { motion } from 'framer-motion'

export default function SkillTag({ label, hot }) {
  return (
    <motion.span
      whileHover={{ scale: 1.06 }}
      className={`skill-tag inline-flex items-center font-body text-[0.78rem] px-3 py-1.5 rounded-sm cursor-default transition-colors duration-200
        ${hot
          ? 'border border-[rgba(0,255,136,0.3)] text-accent bg-[rgba(0,255,136,0.07)] font-semibold'
          : 'border border-[rgba(0,255,136,0.12)] text-text-2'
        }`}
      style={hot ? { boxShadow: '0 0 8px rgba(0,255,136,0.15)' } : {}}
    >
      {label}
    </motion.span>
  )
}
