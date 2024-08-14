import {Box, Typography} from '@mui/material'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Error404, Error500} from './Errors'
import {Link} from '../../components'

export const Error = () => {
  return (
    <Box>
      <Typography variant='h1'>Error</Typography>

      <Routes>
        <Route path='/404' element={<Error404 />} />
        <Route path='/500' element={<Error500 />} />
        <Route path='*' element={<Navigate to='/error/404' replace />} />
      </Routes>

      <Link href='/'>Go back Home</Link>
    </Box>
  )
}
