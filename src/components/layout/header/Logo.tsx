import Link from 'next/link'
import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <motion.div 
        className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <span className="text-white font-bold text-xl">M</span>
      </motion.div>
      <span className="text-2xl font-bold">Mainic</span>
    </Link>
  )
}
