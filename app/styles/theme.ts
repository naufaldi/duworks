import { Button } from './button/index'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
