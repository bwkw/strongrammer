import { ThemeOptions } from '@mui/material'
import { grey } from '@mui/material/colors'

const myTheme: ThemeOptions = {
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: grey[400],
    },
  },
  typography: {
    fontFamily: ['EB Garamond'].join(','),
  },
}

export default myTheme
