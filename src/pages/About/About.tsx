import {Box, Typography, Button, Grid, List, ListItem} from '@mui/material'
import {useBreakpoint} from '../../hooks/useBreakpoint'
import {COLORS} from '../../theme/colors'
import {Gallery, StaggeredBackgroundImage} from '../../components'

const services = [
  {
    title: 'Service 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Service 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Service 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const About = () => {
  const {isMobile} = useBreakpoint()

  const images = [
    {
      src: 'https://via.placeholder.com/600x400?text=Gallery+1',
      thumb: 'https://via.placeholder.com/100x200?text=Gallery+1',
      alt: 'gallery-1',
    },
    {
      src: 'https://via.placeholder.com/600x400?text=Gallery+2',
      thumb: 'https://via.placeholder.com/150x200?text=Gallery+2',
      alt: 'gallery-2',
    },
    {
      src: 'https://via.placeholder.com/600x400?text=Gallery+3',
      thumb: 'https://via.placeholder.com/300x200?text=Gallery+3',
      alt: 'gallery-3',
    },
    {
      src: 'https://via.placeholder.com/600x400?text=Gallery+4',
      thumb: 'https://via.placeholder.com/200x200?text=Gallery+4',
      alt: 'gallery-4',
    },
    ...Array.from({length: 66}, (_, i) => ({
      src: `https://via.placeholder.com/${Math.floor(50 + Math.random() * 500)}x${Math.floor(100 + Math.random() * 50)}?text=Gallery+${i + 5}`,
      thumb: `https://via.placeholder.com/${Math.floor(100 + Math.random() * 300)}x${Math.floor(50 + Math.random() * 100)}?text=Thumb+${i + 5}`,
      alt: `gallery-${i + 5}`,
    })),
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '1rem',
          minHeight: '60vh',
          textAlign: 'left',
          paddingX: isMobile ? '2rem' : '8rem',
        }}
      >
        <Typography
          variant='h3'
          sx={{
            color: COLORS.PRIMARY.D1,
          }}
        >
          Sobre Nosotros
        </Typography>
        <Typography
          variant='body1'
          sx={{
            maxWidth: '800px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Typography>
        <Button variant='contained'>Contáctenos</Button>
      </Box>

      {/* Mission & Vision Section */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '1rem',
          paddingX: isMobile ? '2rem' : '8rem',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'space-around',
        }}
      >
        <StaggeredBackgroundImage
          src='https://via.placeholder.com/314x377'
          alt='mission'
          width='314px'
          height='377px'
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '700px',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              color: COLORS.PRIMARY.D1,
            }}
          >
            Nuestra Misión
          </Typography>
          <Typography variant='body1'>
            Brindar a un máximo de 10 niños y niñas entre los 0 y 5 años de edad, que han sido
            separados de su familia biológica, un hogar transitorio que, dentro del marco de la
            doctrina de protección integral, reciban una atención individualizada que facilite su
            desarrollo global como personas.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '1rem',
          paddingX: isMobile ? '2rem' : '8rem',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'space-around',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '700px',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              color: COLORS.SECONDARY.D1,
            }}
          >
            Nuestra Visión
          </Typography>
          <Typography variant='body1'>
            Lograr la excelencia en nuestra labor, en cuanto a hacer posible el cumplimiento de sus
            derechos de abrigo, alimentación, salud, educación, recreación, potencializando los
            intereses, las cualidades, las habilidades y los valores individuales de cada uno de los
            niños y niñas que atiende nuestra organización.
          </Typography>
        </Box>

        <StaggeredBackgroundImage
          src='https://via.placeholder.com/314x377'
          alt='mission'
          width='314px'
          height='377px'
          backgroundPosition='right'
          backgroundColor={COLORS.PRIMARY.PRIMARY}
        />
      </Box>

      {/* History Section */}
      <Box
        sx={{
          backgroundColor: COLORS.SECONDARY.L2,
          padding: '3rem',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingX: isMobile ? '2rem' : '8rem',
          gap: '1rem',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            color: COLORS.PRIMARY.D2,
          }}
        >
          Nuestra Historia
        </Typography>
        <Typography variant='body1' sx={{textAlign: 'left'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
        </Typography>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          padding: '3rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-around',
          gap: '2rem',
        }}
      >
        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h4' sx={{color: COLORS.SECONDARY.D1}}>
            Servicios
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Typography>
        </Box>

        <Box>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              listStyleType: 'disc',
            }}
          >
            {services.map((service, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'list-item',
                }}
              >
                <Typography variant='body2'>{service.description}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            color: COLORS.PRIMARY.D2,
            padding: '1rem',
          }}
        >
          Galería
        </Typography>

        <Gallery images={images} speed={500} />
      </Box>
    </Box>
  )
}
