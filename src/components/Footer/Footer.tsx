import {Box, Button, MenuItem, Select, SelectChangeEvent, Typography} from '@mui/material'
import {Link} from '../Link'
import {ROUTES} from '../../constants'
import {COLORS} from '../../theme/colors'
import {useBreakpoint} from '../../hooks/useBreakpoint'
import {useTranslation} from 'react-i18next'
import {useIntlNavigationLinks} from 'hooks'
import {useState} from 'react'
import es from 'assets/es.png'
import en from 'assets/en.png'

export const Footer = () => {
  const {isMobile} = useBreakpoint()
  const {t, i18n} = useTranslation()
  const navigationLinks = useIntlNavigationLinks()
  const [footerInfo, setFooterInfo] = useState([
    {key: t('footer.email'), value: 'hogarbrotesdeolivo@gmail.com'},
    {key: t('footer.phone'), value: '(506) 2240 8655'},
    {
      key: t('footer.address'),
      value: t('footer.addressValue'),
    },
  ])

  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    const language = event.target.value as string
    i18n.changeLanguage(language)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: COLORS.PRIMARY.D2,
        color: 'white',
        padding: '32px',
        gap: isMobile ? '32px' : '32px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '32px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: isMobile ? '16px' : '32px',
          }}
        >
          <Link href={ROUTES.home}>
            <img
              src='/assets/FullLogo.png'
              alt='Logo'
              style={{height: '60px', width: '60px', borderRadius: '50%', objectFit: 'cover'}}
            />
          </Link>

          <Typography variant='h5'>Hogar Infantil Brotes de Olivo</Typography>
        </Box>

        <Box>
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
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100%',
          gap: '16px',
        }}
      >
        {footerInfo.map(({key, value}) => (
          <Box
            key={key}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              maxWidth: '500px',
            }}
          >
            <Box
              sx={{
                width: '20%',
                alignSelf: 'flex-start',
              }}
            >
              <Typography variant='body1'>{key}</Typography>
            </Box>
            <Box width='70%'>
              {key === 'Email' ? (
                <Link href={`mailto:${value}`} external>
                  {value}
                </Link>
              ) : (
                <Typography variant='body1'>{value}</Typography>
              )}
            </Box>
          </Box>
        ))}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
          }}
        >
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
      </Box>

      <Box>
        <Typography variant='body2'>
          &copy; {new Date().getFullYear()} Hogar Infantil Brotes de Olivo
        </Typography>
      </Box>
    </Box>
  )
}
