import {Box, Button, Typography} from '@mui/material'
import {Link} from '../Link'
import {NAVIGATION_LINKS, ROUTES} from '../../constants'
import {COLORS} from '../../theme/colors'
import {useBreakpoint} from '../../hooks/useBreakpoint'

const footerInfo = [
  {key: 'Email', value: 'hogarbrotesdeolivo@gmail.com'},
  {key: 'Teléfono', value: '(506) 2240 8655'},
  {
    key: 'Dirección',
    value:
      'La Florida de Tibás, de Rostipollos 300 Norte, 100 Oeste y 25 Norte o Apartado Postal 1450-1100 , San José, Costa Rica',
  },
]

export const Footer = () => {
  const {isMobile} = useBreakpoint()

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
          {NAVIGATION_LINKS.map(({href, label}) => (
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
      </Box>

      <Box>
        <Typography variant='body2'>
          &copy; {new Date().getFullYear()} Hogar Infantil Brotes de Olivo
        </Typography>
      </Box>
    </Box>
  )
}
