# Framer Motion Animation Patterns - AI Agent Tool

## Overview

This document provides standardized patterns and best practices for creating premium animations with Framer Motion (now called Motion). Use these patterns to create consistent, performant, and professional animations.

## Core Principles

### 1. Component Structure

- Always use `memo` for optimized rendering
- Extract reusable animated components following Single Responsibility Principle
- Keep animation logic separate from business logic

### 2. Performance Optimization

- Use `willChange` CSS property for frequently animated properties
- Prefer `transform` properties (x, y, scale, rotate) over layout properties
- Use hardware acceleration when possible: `transform: "translateX(0px)"` over `left: 0`

### 3. Code Organization

- Define variants outside component or as constants for clarity
- Name variants descriptively: `initial`, `animate`, `hover`, `tap`, `exit`
- Use English for all code and comments
- Place comments on the line before the code they describe

---

## Animation Patterns

### Pattern 1: Basic Entry Animation

```typescript
const componentVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

<motion.div
  variants={componentVariants}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
```

**When to use:** Component mount animations, page transitions

---

### Pattern 2: Hover & Tap Interactions

```typescript
const interactiveVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    }
  },
  tap: {
    scale: 0.95,
  }
}

<motion.button
  variants={interactiveVariants}
  initial="rest"
  whileHover="hover"
  whileTap="tap"
>
  Button
</motion.button>
```

**When to use:** Interactive elements (buttons, cards, links)

**Performance tip:** Use `whileHover` and `whileTap` props instead of CSS for better control

---

### Pattern 3: Stagger Children Animation

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**When to use:** Lists, navigation items, gallery grids

**Key feature:** Parent controls timing, children inherit variants

---

### Pattern 4: Shimmer/Gleam Effect

```typescript
const shimmerVariants = {
  rest: {
    x: '-100%',
  },
  hover: {
    x: '100%',
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    }
  }
}

<motion.div className="relative overflow-hidden">
  <span className="relative z-10">Content</span>
  <motion.div
    variants={shimmerVariants}
    initial="rest"
    whileHover="hover"
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
  />
</motion.div>
```

**When to use:** Buttons, cards, promotional elements

**Note:** Requires `overflow-hidden` on parent

---

### Pattern 5: Continuous/Infinite Animation

```typescript
<motion.div
  animate={{
    x: ['-100%', '200%'],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatDelay: 2,
    ease: 'easeInOut',
  }}
  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
/>
```

**When to use:** Loading indicators, ambient effects, attention grabbers

**Array syntax:** Defines keyframes for the animation

---

### Pattern 6: Glow/Pulse Effect

```typescript
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
      ease: 'easeInOut',
    }
  }
}

<motion.div
  variants={glowVariants}
  className="absolute inset-0 bg-primary-500 rounded-lg blur-md"
/>
```

**When to use:** Call-to-action elements, active states, premium effects

---

### Pattern 7: 3D Rotation Effect

```typescript
const letterVariants = {
  rest: {
    rotateY: 0,
  },
  hover: {
    rotateY: 360,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    }
  }
}

<motion.span
  variants={letterVariants}
  style={{ transformStyle: 'preserve-3d' }}
>
  Text
</motion.span>
```

**When to use:** Logo animations, unique text effects

**Critical:** Must include `transformStyle: 'preserve-3d'`

---

### Pattern 8: Expanding Underline

```typescript
<motion.div
  className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
  initial={{ width: '0%' }}
  whileHover={{ width: '100%' }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
/>
```

**When to use:** Navigation links, text emphasis

---

### Pattern 9: Floating Particles

```typescript
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
    x: [0, (Math.random() * 30 - 15)],
    y: [0, -20 - Math.random() * 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: Math.random() * 0.5,
      ease: 'easeOut',
    }
  }
}

<motion.div
  variants={particleVariants}
  initial="initial"
  animate="animate"
  className="absolute w-1 h-1 bg-primary-500 rounded-full"
/>
```

**When to use:** Decorative effects, magical interactions

---

## Transition Types & Easing

### Spring (Default for transforms)

```typescript
transition={{ 
  type: "spring", 
  stiffness: 400, 
  damping: 17 
}}
```

**Best for:** Natural, bouncy movements

### Tween with Custom Easing

```typescript
transition={{ 
  duration: 0.6,
  ease: [0.6, -0.05, 0.01, 0.99] // Custom cubic bezier
}}
```

**Best for:** Smooth, controlled animations

### Common Easing Values

- `ease: 'easeOut'` - Starts fast, ends slow (best for exit)
- `ease: 'easeIn'` - Starts slow, ends fast (best for entry)
- `ease: 'easeInOut'` - Smooth start and end
- `ease: 'linear'` - Constant speed

---

## Variant Propagation Pattern

### Parent-Child Animation Flow

```typescript
// Parent defines when to animate
<motion.div
  initial="rest"
  whileHover="hover"
>
  {/* Child only needs variants, inherits timing from parent */}
  <motion.div variants={childVariants} />
</motion.div>
```

**Key rule:** Children inherit variant state from parent if they don't have `animate` prop

---

## Best Practices Checklist

### ✅ DO

- Use `variants` for complex, multi-state animations
- Combine multiple gesture props (`whileHover`, `whileTap`, `whileDrag`)
- Use `memo` to prevent unnecessary re-renders
- Keep animation durations under 1 second for UI interactions
- Use array syntax for keyframe animations
- Apply `overflow-hidden` when using shimmer effects
- Use `transformStyle: 'preserve-3d'` for 3D rotations

### ❌ DON'T

- Animate layout properties (width, height, top, left) - use transforms instead
- Create variants inside component render (define outside or memoize)
- Forget `initial` prop - leads to flash of unstyled content
- Use overly complex easing curves for simple interactions
- Nest too many animated components (performance)
- Animate on every state change (be selective)

---

## Color Palette Integration

When using with Tailwind CSS, reference colors correctly:

```typescript
// ✅ Correct
animate={{ 
  backgroundColor: 'rgb(17, 147, 212)' // primary-500 
}}

// ❌ Incorrect
animate={{ 
  backgroundColor: 'primary-500' // Won't work
}}
```

**Tip:** Use gradient classes in className, animate opacity/position for best performance

---

## Common Animation Recipes

### Premium Button

```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative overflow-hidden"
>
  <span className="relative z-10">Text</span>
  <motion.span
    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
    initial={{ x: '-100%' }}
    whileHover={{ x: '100%' }}
    transition={{ duration: 0.5 }}
  />
</motion.button>
```

### Card Hover Effect

```typescript
<motion.div
  whileHover={{ y: -5 }}
  transition={{ duration: 0.3 }}
  className="card"
>
  Content
</motion.div>
```

### Loading Skeleton

```typescript
<motion.div
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="h-4 bg-gray-300 rounded"
/>
```

---

## Performance Tips

1. **Use `willChange`** for frequently animated properties:

```typescript
style={{ willChange: 'transform' }}
```

2. **Batch animations** using variants instead of multiple animate calls

3. **Disable animations** on low-end devices:

```typescript
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

<motion.div
  initial={!shouldReduceMotion && "hidden"}
  animate={!shouldReduceMotion && "visible"}
>
```

4. **Use layout animations** sparingly - they're powerful but expensive

---

## Documentation Reference

Official Documentation: <https://motion.dev/docs>

- React Animation: <https://motion.dev/docs/react-animation>
- Gestures: <https://motion.dev/docs/react-gestures>
- Motion Component: <https://motion.dev/docs/react-motion-component>

---

## Example Implementation Structure

```typescript
import { memo } from 'react'
import { motion } from 'framer-motion'

// Define variants outside component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Extract sub-components
const AnimatedItem = memo(({ children }: { children: React.ReactNode }) => (
  <motion.div variants={itemVariants}>
    {children}
  </motion.div>
))

AnimatedItem.displayName = 'AnimatedItem'

// Main component
export const AnimatedList = memo(({ items }: { items: string[] }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <AnimatedItem key={index}>
          {item}
        </AnimatedItem>
      ))}
    </motion.div>
  )
})

AnimatedList.displayName = 'AnimatedList'
```

---

## Quick Reference: Props

| Prop | Purpose | Example |
|------|---------|---------|
| `initial` | Starting state | `initial="hidden"` or `initial={{ opacity: 0 }}` |
| `animate` | Target state | `animate="visible"` or `animate={{ opacity: 1 }}` |
| `exit` | Exit animation | `exit={{ opacity: 0 }}` (requires `<AnimatePresence>`) |
| `whileHover` | Hover state | `whileHover={{ scale: 1.1 }}` |
| `whileTap` | Press state | `whileTap={{ scale: 0.9 }}` |
| `whileDrag` | Drag state | `whileDrag={{ scale: 1.1 }}` |
| `whileInView` | When in viewport | `whileInView={{ opacity: 1 }}` |
| `transition` | Animation config | `transition={{ duration: 0.5 }}` |
| `variants` | Named animations | `variants={myVariants}` |

---

**Version:** Based on Framer Motion/Motion v11+ (2025)
**Last Updated:** October 2025
