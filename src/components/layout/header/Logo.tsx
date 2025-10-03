import Link from 'next/link'
import { motion } from 'framer-motion'
import { memo } from 'react'

interface LogoProps {
  className?: string
}

const FloatingParticle = memo(({ index }: { index: number }) => {
  const particleVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0,
    },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, (index % 2 === 0 ? 15 : -15) * Math.random()],
      y: [0, -20 - Math.random() * 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: index * 0.3,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <motion.div
      variants={particleVariants}
      initial="initial"
      animate="animate"
      className="absolute w-1 h-1 bg-primary-500 rounded-full"
      style={{
        left: `${20 + index * 15}%`,
        bottom: '10%',
      }}
    />
  )
})

FloatingParticle.displayName = 'FloatingParticle'

export const Logo = memo(({ className = '' }: LogoProps) => {
  const containerVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  }

  const logoVariants = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: 'easeInOut' as const,
        },
        scale: {
          duration: 0.3,
        },
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const glowVariants = {
    rest: {
      opacity: 0.5,
      scale: 1,
    },
    hover: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  }

  const letterVariants = {
    rest: {
      y: 0,
      rotateY: 0,
    },
    hover: {
      y: [0, -3, 0],
      rotateY: [0, 180, 360],
      transition: {
        duration: 0.6,
        ease: 'easeInOut' as const,
      },
    },
  }

  const textVariants = {
    rest: {
      x: 0,
    },
    hover: {
      x: [0, 2, 0],
      transition: {
        duration: 0.5,
        ease: 'easeInOut' as const,
      },
    },
  }

  const shimmerVariants = {
    rest: {
      x: '-100%',
    },
    hover: {
      x: '100%',
      transition: {
        duration: 0.8,
        ease: 'easeInOut' as const,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={className}
    >
      <Link href="/" className="flex items-center space-x-3 group">
        <motion.div
          variants={logoVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="relative w-12 h-12 flex items-center justify-center"
        >
          <motion.div
            variants={glowVariants}
            className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg blur-md opacity-50"
          />

          <div className="relative w-full h-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-lg overflow-hidden shadow-lg shadow-primary-500/30">
            <motion.div
              variants={shimmerVariants}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <motion.span
              variants={letterVariants}
              className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              M
            </motion.span>

            <div className="absolute inset-0">
              {[0, 1, 2].map((index) => (
                <FloatingParticle key={index} index={index} />
              ))}
            </div>
          </div>

          <motion.div
            className="absolute -inset-1 border-2 border-primary-500/20 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{
              opacity: 1,
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>

        <motion.div variants={textVariants} className="relative px-2 py-1 overflow-hidden">
          <span className="text-2xl font-bold text-white whitespace-nowrap relative z-10">
            Mainic
          </span>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-700"
            initial={{ width: '0%' }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
})

Logo.displayName = 'Logo'