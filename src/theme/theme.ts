import {createTheme, responsiveFontSizes} from '@mui/material'
import {MuiButton} from './buttons'

export const lightTheme = createTheme({
  components: {
    MuiButton,
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
})

export const theme = responsiveFontSizes(lightTheme)
