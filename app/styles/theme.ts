import { extendTheme } from '@chakra-ui/react'

import { Button } from './button/index'

const theme = extendTheme({
  styles: {
    global: {
      html: {
        overflowX: 'hidden',
      },
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    base: '#FDFDFD',
    brand: {
      primary: '#E5212E',
      secondary: '#414A62',
    },
  },
  components: {
    Button,
  },
})

export default theme
