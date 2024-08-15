import {useState, useEffect} from 'react'
import {BREAKPOINTS_VALUE} from '../constants'

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<BreakpointType>('md')
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [screenWidth, setScreenWidth] = useState<number>(0)

  type BreakpointType = 'sm' | 'md' | 'lg'

  useEffect(() => {
    const setResponsiveness = () => {
      if (!window) return

      if (window.innerWidth < BREAKPOINTS_VALUE.desktop) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())

    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (!window) return

      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (screenWidth < BREAKPOINTS_VALUE.mobile) {
      setBreakpoint('sm')
    } else if (screenWidth < BREAKPOINTS_VALUE.tablet) {
      setBreakpoint('md')
    } else if (screenWidth < BREAKPOINTS_VALUE.desktop) {
      setBreakpoint('lg')
    } else {
      setBreakpoint('lg')
    }
  }, [screenWidth])

  return {isMobile, breakpoint}
}
