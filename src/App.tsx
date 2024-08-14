import {Container, CssBaseline, ThemeProvider} from '@mui/material'
import {Router} from './router'
import {theme} from './theme'
import '@fontsource/lato/100.css'
import '@fontsource/lato/300.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/900.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          padding: '0 !important',
        }}
        maxWidth={false}
      >
        <Router />
      </Container>
    </ThemeProvider>
  )
}

export default App
