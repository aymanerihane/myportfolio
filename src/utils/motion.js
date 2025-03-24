/**
 * Animation presets for Framer Motion
 * Improved with better defaults, type safety, and performance optimizations
 */

export const textVariant = (delay = 0) => ({
  hidden: {
    y: -20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay,
    },
  },
});

export const fadeIn = (
  direction = "up", // Default direction
  type = "tween", // Default transition type
  delay = 0,
  duration = 0.5 // Reasonable default duration
) => ({
  hidden: {
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0, // Reduced values for mobile friendliness
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: ["easeOut", "backOut"].includes(type) ? type : "easeOut",
    },
  },
});

export const zoomIn = (delay = 0, duration = 0.4) => ({
  hidden: {
    scale: 0.9, // Start from 0.9 instead of 0 for less dramatic effect
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay,
      duration,
    },
  },
});

export const slideIn = (
  direction = "left",
  type = "spring",
  delay = 0,
  duration = 0.5
) => ({
  hidden: {
    x: direction === "left" ? "-20%" : direction === "right" ? "20%" : 0, // Reduced percentages
    y: direction === "up" ? "20%" : direction === "down" ? "20%" : 0,
    opacity: 0, // Added opacity for smoother transitions
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: type === "tween" ? "easeOut" : undefined,
    },
  },
});

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariantReverse = (delay = 0) => ({
  hidden: {
    x: 20, // Reduced from 50 for subtler effect
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
      ease: "easeInOut",
      delay,
    },
  },
});

// New utility: For mobile-friendly animations
export const mobileFriendlyVariant = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.3,
      ease: "easeOut"
    }
  }
});