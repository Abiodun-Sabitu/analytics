import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/plus-jakarta-sans';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: `'Plus Jakarta Sans Variable', sans-serif`,
    body: `'Plus Jakarta Sans Variable', sans-serif`,
  },
})

export default theme