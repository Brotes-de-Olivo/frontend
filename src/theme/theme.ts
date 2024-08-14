import {createTheme} from '@mui/material'
import {MuiButton} from './buttons'

export const theme = createTheme({
  components: {
    MuiButton,
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
})
