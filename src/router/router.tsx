import {Routes, Route, Navigate} from 'react-router-dom'
import {About, Contact, Error, Home, News} from '../pages'
import {BackToTop, Footer, Topbar} from '../components'
import {Container} from '@mui/material'
import {TOPBAR_HEIGHT} from '../constants'

export const Router = () => {
  return (
    <>
      <Topbar />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: `calc(100vh - ${TOPBAR_HEIGHT})`,
          padding: '0 !important',
        }}
        maxWidth={false}
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/error/*' element={<Error />} />
          <Route path='*' element={<Navigate replace to='/error' />} />
        </Routes>
      </Container>

      <BackToTop />
      <Footer />
    </>
  )
}
