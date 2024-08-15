import {Box, Typography} from '@mui/material'

export const Error404 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <Typography variant='h1'>Error 404</Typography>
    </Box>
  )
}
