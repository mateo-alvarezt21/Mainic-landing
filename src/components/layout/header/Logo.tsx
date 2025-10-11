import Link from 'next/link'
import { motion } from 'framer-motion'
import { memo } from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
}

// interface CompanyData {
//   id: number
//   logo: {
//     url: string
//   }
// }

// const fetchCompanyLogo = async (): Promise<string | null> => {
//   try {
//     console.log('Fetching company logo...')
//     const response = await fetch('https://strapi-core.mainics.com/empresa-data')
//     const data: CompanyData[] = await response.json()
//     console.log('Company data received:', data)
//     if (data.length > 0 && data[0].logo?.url) {
//       const logoUrl = `https://strapi-core.mainics.com${data[0].logo.url}`
//       console.log('Logo URL:', logoUrl)
//       return logoUrl
//     }
//     console.log('No logo found in data')
//     return null
//   } catch (error) {
//     console.error('Error fetching company logo:', error)
//     return null
//   }
// }

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
  // Direct logo URL - we know this works from our testing
  const logoUrl = 'https://strapi-core.mainics.com/uploads/Logo_minimalista_en_tonos_azules_removebg_preview_8c8dea0090.png'
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

  // const glowVariants = {
  //   rest: {
  //     opacity: 0.5,
  //     scale: 1,
  //   },
  //   hover: {
  //     opacity: [0.5, 1, 0.5],
  //     scale: [1, 1.2, 1],
  //     transition: {
  //       duration: 1.5,
  //       repeat: Infinity,
  //       ease: 'easeInOut' as const,
  //     },
  //   },
  // }

  // const letterVariants = {
  //   rest: {
  //     y: 0,
  //     rotateY: 0,
  //   },
  //   hover: {
  //     y: [0, -3, 0],
  //     rotateY: [0, 180, 360],
  //     transition: {
  //       duration: 0.6,
  //       ease: 'easeInOut' as const,
  //     },
  //   },
  // }

  // const textVariants = {
  //   rest: {
  //     x: 0,
  //   },
  //   hover: {
  //     x: [0, 2, 0],
  //     transition: {
  //       duration: 0.5,
  //       ease: 'easeInOut' as const,
  //     },
  //   },
  // }

  // const shimmerVariants = {
  //   rest: {
  //     x: '-100%',
  //   },
  //   hover: {
  //     x: '100%',
  //     transition: {
  //       duration: 0.8,
  //       ease: 'easeInOut' as const,
  //     },
  //   },
  // }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={className}
    >
      <Link href="/" className="flex items-center group p-0 m-0">
        <motion.div
          variants={logoVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="relative w-28 h-28 flex items-center justify-center p-0 m-0"
        >
          <Image
            src={logoUrl}
            alt="Mainic Logo"
            width={112}
            height={112}
            className="w-28 h-28 object-contain block logo-theme"
            priority
            style={{ display: 'block', margin: 0, padding: 0 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
})

Logo.displayName = 'Logo'