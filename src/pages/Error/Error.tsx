import {Box, Button} from '@mui/material'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Error404, Error500} from './Errors'
import {Link} from '../../components'
import {useTranslation} from 'react-i18next'

export const Error = () => {
  const {t} = useTranslation()
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
          <Button>{t('constants.navigation.backHome')}</Button>
        </Link>
      </Box>
    </Box>
  )
}
