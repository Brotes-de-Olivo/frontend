import {Box, Button, Grid, Typography} from '@mui/material'
import {useBreakpoint} from '../../hooks/useBreakpoint'
import {COLORS} from '../../theme/colors'
import {
  Card,
  Image,
  PressableTile,
  PressableTileProps,
  StaggeredBackgroundImage,
} from '../../components'
import {Brightness1} from '@mui/icons-material'

const CARDS = [
  {
    title: 'Card 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet justo et nulla placerat, eu dignissim nibh volutpat. Proin eleifend ut leo vitae molestie. ',
    icon: (
      <Brightness1
        sx={{
          color: COLORS.BASE.WHITE,
        }}
      />
    ),
    backgroundColor: COLORS.SECONDARY.D1,
  },
  {
    title: 'Card 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet justo et nulla placerat, eu dignissim nibh volutpat. Proin eleifend ut leo vitae molestie. ',
    icon: (
      <Brightness1
        sx={{
          color: COLORS.BASE.WHITE,
        }}
      />
    ),
    backgroundColor: COLORS.PRIMARY.L1,
  },
  {
    title: 'Card 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet justo et nulla placerat, eu dignissim nibh volutpat. Proin eleifend ut leo vitae molestie. ',
    icon: (
      <Brightness1
        sx={{
          color: COLORS.BASE.WHITE,
        }}
      />
    ),
    backgroundColor: COLORS.SECONDARY.D2,
  },
]

const PRESSABLE_TILES: PressableTileProps[] = [
  {
    title: 'Pressable Tile 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet justo et nulla placerat, eu dignissim nibh volutpat. Proin eleifend ut leo vitae molestie.',
    onClick: () => console.log('Pressable Tile 1 clicked'),
    variant: 'secondary',
  },
  {
    title: 'Pressable Tile 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet justo et nulla placerat, eu dignissim nibh volutpat. Proin eleifend ut leo vitae molestie.',
    onClick: () => console.log('Pressable Tile 2 clicked'),
    variant: 'default',
  },
  {
    title: 'Pressable Tile 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet justo et nulla placerat, eu dignissim nibh volutpat. Proin eleifend ut leo vitae molestie.',
    onClick: () => console.log('Pressable Tile 3 clicked'),
    variant: 'default',
  },
  {
    title: 'Pressable Tile 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet justo et nulla placerat, eu dignissim nibh volutpat. Proin eleifend ut leo vitae molestie.',
    onClick: () => console.log('Pressable Tile 4 clicked'),
    variant: 'secondary',
  },
]

export const Home = () => {
  const {isMobile} = useBreakpoint()
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '2rem',
          minHeight: '80vh',
          padding: isMobile ? '2rem' : '4rem',
          backgroundColor: COLORS.PRIMARY.D1,
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            padding: isMobile ? '2rem' : '0',
            width: isMobile ? '100%' : '50%',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Typography variant='h3' color={COLORS.BASE.WHITE}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>

            <Typography
              variant='body1'
              color={COLORS.BASE.WHITE}
              style={{
                textAlign: 'justify',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
              rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </Typography>
          </Box>

          <Button variant='contained' color='secondary'>
            Learn More
          </Button>
        </Box>

        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src='https://via.placeholder.com/600x500'
              alt='placeholder'
              sx={{
                width: '600px',
                height: '500px',
                maxWidth: '100%',
                borderRadius: '10px',
              }}
            />
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h3'
          color={COLORS.BASE.BLACK}
          sx={{
            textAlign: 'center',
          }}
        >
          Lorem ipsum dolor sit amet
        </Typography>

        <Typography
          variant='body1'
          color={COLORS.BASE.BLACK}
          sx={{
            textAlign: 'center',
          }}
        >
          Lorem ipsum dolor sit amet
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '2rem',
          padding: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {CARDS.map(({description, icon, title, backgroundColor}) => (
          <Card
            key={title}
            description={description}
            icon={icon}
            title={title}
            backgroundColor={backgroundColor}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          padding: '2rem',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          gap: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            width: isMobile ? '100%' : '30%',
          }}
        >
          <Typography
            variant='h3'
            color={COLORS.BASE.BLACK}
            sx={{
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            width: isMobile ? '100%' : '30%',
          }}
        >
          <Typography
            variant='body1'
            color={COLORS.BASE.BLACK}
            sx={{
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            Lorem ipsum dolor sit amet
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          padding: '2rem',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <StaggeredBackgroundImage
          src='https://via.placeholder.com/375x450'
          alt='mission'
          width='375px'
          height='450px'
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            width: isMobile ? '100%' : '40%',
          }}
        >
          <Grid container spacing={2}>
            {PRESSABLE_TILES.map(({description, onClick, title, variant}) => (
              <Grid item xs={12} sm={6} key={title}>
                <PressableTile
                  description={description}
                  onClick={onClick}
                  title={title}
                  variant={variant}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {!isMobile && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.SECONDARY.PRIMARY,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              height: '550px',
              position: 'relative',
              width: '800px',
              maxWidth: '60%',
            }}
          >
            <Image
              src='https://via.placeholder.com/522x474'
              alt='placeholder'
              sx={{
                width: '522px',
                height: '474px',
                borderRadius: '10px',
                position: 'absolute',
                zIndex: '1',
                right: '55%',
                maxWidth: '100%',
              }}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '750px',
                height: '550px',
                maxWidth: '100%',
                padding: '2rem',
                backgroundColor: COLORS.BASE.WHITE,
                borderRadius: '10px',
                position: 'absolute',
                left: '35%',
                paddingLeft: 'calc(100px + 2rem)',
              }}
            >
              <Typography variant='h3' color={COLORS.BASE.BLACK}>
                Lorem ipsum dolor sit amet
              </Typography>

              <Typography variant='body1' color={COLORS.BASE.BLACK}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet justo et nulla
                placerat, eu dignissim nibh volutpat. Proin eleifend ut leo vitae molestie. 
              </Typography>

              <Button variant='contained' color='secondary'>
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}
