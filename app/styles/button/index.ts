import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  // The styles all button have in common
  // Two variants: outline and solid
  sizes: {
    base: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
      color: 'brand.secondary',
      paddingTop: '12px',
      paddingBottom: '12px',
      border: '0',
    },
  },
  variants: {
    outline: {
      border: '1px solid',
      borderColor: '#A5B3CF',
      color: 'brand.secondary',
      _hover: {
        bg: 'black',
        color: 'white',
        borderColor: 'black',
      },
    },
    white: {
      border: '1px solid',
      borderColor: 'white',
      color: 'brand.secondary',
      bg: 'white',
      _hover: {
        bg: 'black',
        color: 'white',
        borderColor: 'black',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: 'outline',
    size: 'base',
  },
})
