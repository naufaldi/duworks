// Define your custom hook
export const useAnimations = () => {
  // Define your animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const scaleUp = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  }
  const scaleUpHover = {
    hover: {
      scale: 1.1, // Scale the image up by 10%
      transition: {
        duration: 0.3, // Duration of the scaling transition
        ease: 'easeInOut', // Transition type for a smooth effect
      },
    },
  }
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }
  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }
  const clipPathCircle = {
    hidden: {
      clipPath: 'circle(0% at 100% 100%)', // Start from a point at the bottom right
      opacity: 0,
    },
    visible: {
      clipPath: 'circle(150% at 50% 50%)', // Expand to reveal the whole content
      opacity: 1,
      transition: {
        duration: 2, // Adjust the duration as needed
        ease: 'easeOut',
      },
    },
  }

  // Return the animation variants
  return { fadeIn, slideUp, scaleUp, fadeInUp, clipPathCircle, fadeInRight, scaleUpHover }
}
