import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
} from '@mui/material'
import {ROUTES, TOPBAR_HEIGHT} from '../../constants'
import {Link} from '../Link'
import {COLORS} from '../../theme/colors'
import {useBreakpoint} from '../../hooks/useBreakpoint'
import {Menu, MenuOpen, ConnectWithoutContact} from '@mui/icons-material'
import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {useIntlNavigationLinks} from 'hooks'
import {useTranslation} from 'react-i18next'
import es from 'assets/es.png'
import en from 'assets/en.png'

export const Topbar = () => {
  const [open, setOpen] = useState(false)
  const {isMobile} = useBreakpoint()
  const location = useLocation()
  const navigationLinks = useIntlNavigationLinks()
  const {t, i18n} = useTranslation()

  const handleDrawer = () => setOpen(!open)

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    const language = event.target.value as string
    i18n.changeLanguage(language)
  }

  return (
    <AppBar
      sx={{
        backgroundColor: COLORS.PRIMARY.D2,
        boxShadow: '0px 4px 16px 0px rgba(0, 36, 93, 0.05)',
        display: 'flex',
        height: TOPBAR_HEIGHT,
        justifyContent: 'center',
      }}
      position='sticky'
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {isMobile ? (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <IconButton
                sx={{
                  color: COLORS.BASE.WHITE,
                  fontSize: '24px',
                }}
                onClick={handleDrawer}
              >
                {open ? <MenuOpen /> : <Menu />}
              </IconButton>

              <Link href={ROUTES.home}>
                <img
                  src='/assets/FullLogo.png'
                  alt='Logo'
                  style={{height: '60px', width: '60px', borderRadius: '50%', objectFit: 'cover'}}
                />
              </Link>

              <Link href={ROUTES.contact}>
                <IconButton
                  sx={{
                    color: COLORS.BASE.WHITE,
                    fontSize: '24px',
                  }}
                >
                  <ConnectWithoutContact />
                </IconButton>
              </Link>
            </Box>

            <Drawer
              open={open}
              PaperProps={{
                sx: {
                  marginTop: '80px',
                  width: '100%',
                  boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.025)',
                },
              }}
              ModalProps={{
                sx: {
                  marginTop: '80px',
                },
              }}
              hideBackdrop
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  padding: '1rem',
                  width: '100%',
                }}
              >
                {navigationLinks.map(({href, label}) => (
                  <Link key={href} href={href}>
                    <Button
                      variant='text'
                      sx={{
                        color: COLORS.BASE.DARK_GRAY,
                        fontSize: '18px',
                        textTransform: 'none',
                      }}
                    >
                      {label}
                    </Button>
                  </Link>
                ))}

                <Link key={ROUTES.contact} href={ROUTES.contact}>
                  <Button
                    variant='text'
                    sx={{
                      color: COLORS.BASE.DARK_GRAY,
                      fontSize: '18px',
                      textTransform: 'none',
                    }}
                  >
                    Contáctenos
                  </Button>
                </Link>
                <Select
                  variant='outlined'
                  value={i18n.language}
                  onChange={handleChangeLanguage}
                  sx={{
                    backgroundColor: COLORS.BASE.WHITE,
                    color: COLORS.PRIMARY.D2,
                    borderRadius: '8px',
                    '> div': {
                      padding: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                    },
                  }}
                >
                  <MenuItem
                    value='es'
                    sx={{
                      gap: '16px',
                    }}
                  >
                    Español
                    <img
                      src={es}
                      alt='es'
                      style={{
                        borderRadius: '50%',
                        objectFit: 'fill',
                        height: '20px',
                        justifyContent: 'space-between',
                      }}
                    />
                  </MenuItem>
                  <MenuItem
                    value='en-US'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      justifyContent: 'space-between',
                    }}
                  >
                    English <img src={en} alt='en' style={{width: '20px'}} />
                  </MenuItem>
                </Select>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box sx={{display: 'flex', alignItems: 'center', gap: '16px'}}>
              <Link href={ROUTES.home}>
                <img
                  src='/assets/FullLogo.png'
                  alt='Logo'
                  style={{height: '60px', width: '60px', borderRadius: '50%', objectFit: 'cover'}}
                />
              </Link>

              {navigationLinks.map(({href, label}) => (
                <Link key={href} href={href}>
                  <Button
                    variant='text'
                    sx={{
                      color: COLORS.BASE.WHITE,
                      fontSize: '18px',
                      textTransform: 'none',
                    }}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <Link href={ROUTES.contact}>
                <Button
                  variant='outlined'
                  sx={{
                    color: COLORS.BASE.WHITE,
                    fontSize: '18px',
                    textTransform: 'none',
                    borderColor: COLORS.BASE.WHITE,
                    borderRadius: '15px',
                  }}
                >
                  {t('constants.navigation.contact')}
                </Button>
              </Link>

              <Select
                variant='outlined'
                value={i18n.language}
                onChange={handleChangeLanguage}
                sx={{
                  borderRadius: '8px',
                  '> div': {
                    padding: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                  },
                  border: '1px solid white',
                  '> svg': {
                    color: COLORS.BASE.WHITE,
                  },
                }}
                style={{
                  color: COLORS.BASE.WHITE,
                  borderWidth: '2px',
                  borderColor: COLORS.BASE.WHITE,
                  borderRadius: '15px',
                  height: '100%',
                }}
              >
                <MenuItem
                  value='es'
                  sx={{
                    gap: '16px',
                  }}
                >
                  <img
                    src={es}
                    alt='es'
                    style={{
                      borderRadius: '50%',
                      objectFit: 'fill',
                      height: '20px',
                      justifyContent: 'space-between',
                    }}
                  />
                </MenuItem>
                <MenuItem
                  value='en-US'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    justifyContent: 'space-between',
                  }}
                >
                  <img src={en} alt='en' style={{width: '20px'}} />
                </MenuItem>
              </Select>
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
