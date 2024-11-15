import {ArrowUpwardOutlined} from '@mui/icons-material'
import {IconButton} from '@mui/material'
import {useEffect, useState} from 'react'

export const BackToTop = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <IconButton
      sx={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        },
        opacity: show ? 1 : 0,
        transition: 'opacity 0.5s',
      }}
      onClick={handleClick}
    >
      <ArrowUpwardOutlined />
    </IconButton>
  )
}
