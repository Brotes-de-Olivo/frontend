import {AppBar, Box, Button, Toolbar} from '@mui/material'
import {ROUTES} from '../../constants'
import {Link} from '../Link'
import {COLORS} from '../../theme/colors'

const links: {
  label: string
  href: string
}[] = [
  {label: 'Inicio', href: ROUTES.home},
  {label: 'Sobre Nosotros', href: ROUTES.about},
]

export const Topbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: COLORS.PRIMARY.D2,
        boxShadow: '0px 4px 16px 0px rgba(0, 36, 93, 0.05)',
        display: 'flex',
        height: '80px',
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

            {links.map(({href, label}) => (
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
              Contáctenos
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
