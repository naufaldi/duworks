import { extendTheme } from '@chakra-ui/react'

import { Button } from './button/index'

const theme = extendTheme({
  styles: {
    global: {
<<<<<<< HEAD
      'html, body': {
        scrollBehavior: 'smooth',
=======
      html: {
        overflowX: 'hidden',
>>>>>>> ab5b466ed0cdc857a0dbe739f061f6735c07b688
      },
      body: {
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
