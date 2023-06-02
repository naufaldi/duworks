import { Button } from './button/index'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
