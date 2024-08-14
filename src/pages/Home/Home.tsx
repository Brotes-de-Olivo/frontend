import {Box, Typography} from '@mui/material'
import {Link} from '../../components'

export const Home = () => {
  return (
    <Box>
      <Typography variant='h1'>Home</Typography>
      <Link href='/about'>About</Link>
    </Box>
  )
}
