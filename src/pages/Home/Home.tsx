import {Box, Button, CircularProgress, Grid, Typography} from '@mui/material'
import {useBreakpoint} from '../../hooks/useBreakpoint'
import {COLORS} from '../../theme/colors'
import {Card, Image, Link, PressableTile, StaggeredBackgroundImage} from '../../components'
import {Brightness1} from '@mui/icons-material'
import {EntryTypes, useContentful} from '../../hooks'
import {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'

const CARD_COLORS = [COLORS.SECONDARY.D1, COLORS.PRIMARY.L1, COLORS.SECONDARY.D2]

const ICON_COLORS = [COLORS.SECONDARY.L1, COLORS.PRIMARY.D1, COLORS.SECONDARY.L2]

const getCardColor = (index: number) => CARD_COLORS[index % CARD_COLORS.length]

const getIconColor = (index: number) => ICON_COLORS[index % ICON_COLORS.length]

export const Home = () => {
  const {isMobile} = useBreakpoint()
  const {getEntry} = useContentful()
  const [loading, setLoading] = useState(true)
  const {t, i18n} = useTranslation()

  const [entry, setEntry] = useState<EntryTypes['Inicio'] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const entry = await getEntry({
        entryId: '6AkVKYEN9AgGtMBWW0QjO2',
        locale: i18n.language,
      })

      setEntry(entry as EntryTypes['Inicio'])
      setLoading(false)
    }
    fetchData()
  }, [getEntry, i18n.language])

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)',
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '2rem',
          minHeight: '80vh',
          padding: isMobile ? '0' : '8rem',
          backgroundColor: COLORS.PRIMARY.D1,
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            padding: isMobile ? '2rem' : '0',
            width: isMobile ? '100%' : 'unset ',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '900px',
            }}
          >
            <Typography variant='h3' color={COLORS.BASE.WHITE}>
              {entry?.fields.titulo}
            </Typography>

            <Typography
              variant='body1'
              color={COLORS.BASE.WHITE}
              style={{
                textAlign: 'justify',
              }}
            >
              {entry?.fields.subtitulo}
            </Typography>
          </Box>

          <Link href='/about'>
            <Button variant='contained' color='secondary'>
              {t('constants.navigation.learnMore')}
            </Button>
          </Link>
        </Box>

        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '30%',
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
          {entry?.fields.segundoTitulo}
        </Typography>

        <Typography
          variant='body1'
          color={COLORS.BASE.BLACK}
          sx={{
            textAlign: 'center',
          }}
        >
          {entry?.fields.segundoSubtitulo}
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
        {entry?.fields.cartas.map(({fields}, index) => (
          <Card
            key={fields.titulo}
            description={fields.descripcion}
            icon={
              <Brightness1
                sx={{
                  color: getIconColor(index),
                }}
              />
            }
            title={fields.titulo}
            backgroundColor={getCardColor(index)}
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
            {entry?.fields.tercerTitulo}
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
            {entry?.fields.tercerSubtitulo}
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
          width={isMobile ? '100%' : '375px'}
          height='450px'
          sx={{
            marginBottom: isMobile ? '2rem' : '0',
          }}
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
            {/* {PRESSABLE_TILES.map(({description, onClick, title, variant}) => (
              <Grid item xs={12} sm={6} key={title}>
                <PressableTile
                  description={description}
                  onClick={onClick}
                  title={title}
                  variant={variant}
                />
              </Grid>
            ))} */}
            {entry?.fields.cartasInteractivas.map(({fields}) => (
              <Grid item xs={12} sm={6} key={fields.titulo}>
                <PressableTile
                  description={fields.descripcion}
                  onClick={window.open.bind(null, fields.link)}
                  title={fields.titulo}
                  variant={fields.variante}
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
                {entry?.fields.tituloAnuncio}
              </Typography>

              <Typography variant='body1' color={COLORS.BASE.BLACK}>
                {entry?.fields.descripcionAnuncio}
              </Typography>

              <Link href='/about'>
                <Button variant='contained' color='secondary'>
                  {t('constants.navigation.learnMore')}
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}
