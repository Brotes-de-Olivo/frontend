import {Routes, Route, Navigate} from 'react-router-dom'
import {About, Contact, Error, Home} from '../pages'
import {Topbar} from '../components'

export const Router = () => {
  return (
    <>
      <Topbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/error/*' element={<Error />} />
        <Route path='*' element={<Navigate replace to='/error' />} />
      </Routes>
    </>
  )
}
