export const useStaggerAnimation = () => {
  // Parent variant for stagger
  const parentVariant = {
    hidden: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } },
    visible: {
      transition: {
        staggerChildren: 0.5, // Delay between each child animation
        staggerDirection: 1,
      },
    },
  }

  // Child variant
  const childVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  return { parentVariant, childVariant }
}
