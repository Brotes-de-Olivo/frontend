import {createTheme, responsiveFontSizes} from '@mui/material'
import {MuiButton} from './buttons'
import {MuiTextField} from './textField'

export const lightTheme = createTheme({
  components: {
    MuiButton,
    MuiTextField,
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
})

export const theme = responsiveFontSizes(lightTheme)
