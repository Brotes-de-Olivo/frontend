import {Box, Button} from '@mui/material'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Error404, Error500} from './Errors'
import {Link} from '../../components'

export const Error = () => {
  return (
    <Box>
      <Routes>
        <Route path='/404' element={<Error404 />} />
        <Route path='/500' element={<Error500 />} />
        <Route path='*' element={<Navigate to='/error/404' replace />} />
      </Routes>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href='/'>
          <Button>Go home</Button>
        </Link>
      </Box>
    </Box>
  )
}
