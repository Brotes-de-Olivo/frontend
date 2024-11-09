import {Box, Button, CircularProgress, Divider, Grid2, Typography} from '@mui/material'
import {Image} from 'components'
import {CollectionTypes, useBreakpoint, useContentful} from 'hooks'
import {useEffect, useState} from 'react'
import {COLORS} from 'theme/colors'
import Waze from 'assets/waze.webp'

const ActivityIndicator = ({active}: {active: boolean}) => {
  return (
    <Box
      sx={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: active ? COLORS.STATUS.SUCCESS : COLORS.STATUS.ERROR,
      }}
    />
  )
}

export const News = () => {
  const {getCollection} = useContentful()
  const [loading, setLoading] = useState(true)
  const {isMobile} = useBreakpoint()
  const [news, setNews] = useState<CollectionTypes['Anuncio']>([])

  useEffect(() => {
    const fetchData = async () => {
      getCollection({
        contentType: 'anuncio',
      }).then((news) => {
        setNews(news)

        setLoading(false)
      })
    }

    fetchData()
  }, [])

  const renderNiceDate = ({date, short}: {date: string; short?: boolean}) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: short ? 'short' : 'long',
      day: 'numeric',
    })
  }

  const handleWazeClick = (link?: string) => {
    window.open(link, '_blank')
  }

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

  if (!news.length) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)',
        }}
      >
        <Typography
          variant='h3'
          sx={{
            fontWeight: 'regular',
            color: COLORS.PRIMARY.D1,
          }}
        >
          No hay anuncios disponibles
        </Typography>
      </Box>
    )
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          gap: 2,
          paddingX: isMobile ? 2 : 16,
          paddingY: 4,
        }}
      >
        <Typography
          variant='h3'
          sx={{
            fontWeight: 'regular',
            color: COLORS.PRIMARY.D1,
          }}
        >
          Último anuncio
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: isMobile ? '100%' : '30%',
            }}
          >
            <Image
              src={news[0]?.fields.imagen.fields.file.url}
              alt={news[0]?.fields.imagen.fields.title}
              sx={{
                width: '100%',
                height: 350,
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 1,
              width: isMobile ? '100%' : '70%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 1,
                  alignItems: 'center',
                }}
              >
                <Image
                  src={news[0]?.fields.autor.fields.imagenDePerfil.fields.file.url}
                  alt={news[0]?.fields.autor.fields.imagenDePerfil.fields.title}
                  sx={{
                    width: 32,
                    height: 32,
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />

                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'regular',
                    color: COLORS.PRIMARY.D1,
                  }}
                >
                  {news[0]?.fields.autor.fields.nombre} {news[0]?.fields.autor.fields.apellido},{' '}
                  <Typography
                    variant='body1'
                    sx={{
                      fontWeight: 'regular',
                      color: COLORS.BASE.DARK_GRAY,
                    }}
                    component='span'
                  >
                    {news[0]?.fields.autor.fields.cargo}
                  </Typography>
                </Typography>
              </Box>

              <Typography
                variant='h4'
                sx={{
                  fontWeight: 'regular',
                  color: COLORS.PRIMARY.D1,
                }}
              >
                {news[0]?.fields.titulo}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontWeight: 'regular',
                  color: COLORS.BASE.DARK_GRAY,
                }}
              >
                {news[0]?.fields.descripcion}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? 1 : 2,
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
              }}
            >
              <Typography
                variant='body1'
                sx={{
                  fontWeight: 'regular',
                  color: COLORS.BASE.DARK_GRAY,
                  display: 'flex',
                  gap: 1,
                  alignItems: 'center',
                }}
              >
                <ActivityIndicator active={news[0]?.fields.activo} />
                {news[0]?.fields.activo ? 'Activo' : 'Inactivo'}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontWeight: 'regular',
                  color: COLORS.BASE.DARK_GRAY,
                }}
              >
                Fecha del evento: {renderNiceDate({date: news[0]?.fields.fechaDeEvento})}
              </Typography>

              {news[0]?.fields.ubicacion && (
                <Button
                  sx={{
                    width: 'fit-content',
                    textTransform: 'none',
                  }}
                  onClick={() => handleWazeClick(news[0]?.fields.ubicacion)}
                >
                  Indicaciones
                  <Image
                    src={Waze}
                    alt='Waze'
                    sx={{
                      width: '16px',
                      height: '16px',
                      marginLeft: '0.5rem',
                    }}
                  />
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider
        sx={{
          backgroundColor: COLORS.PRIMARY.L2,
          marginX: isMobile ? 2 : 16,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          gap: 2,
          paddingX: isMobile ? 2 : 16,
          paddingY: 4,
        }}
      >
        <Typography
          variant='h3'
          sx={{
            fontWeight: 'regular',
            color: COLORS.PRIMARY.D1,
          }}
        >
          Todos los anuncios
        </Typography>

        <Grid2
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
          spacing={2}
        >
          {news.map((n) => (
            <Grid2
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
              key={n.sys.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                padding: 2,
                borderRadius: 4,
                backgroundColor: COLORS.BASE.WHITE,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 1,
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1,
                    alignItems: 'center',
                    width: '60%',
                  }}
                >
                  <Image
                    src={n.fields.autor.fields.imagenDePerfil.fields.file.url}
                    alt={n.fields.autor.fields.imagenDePerfil.fields.title}
                    sx={{
                      width: 24,
                      height: 24,
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />

                  <Typography
                    variant='body1'
                    sx={{
                      fontWeight: 'regular',
                      color: COLORS.PRIMARY.D1,
                      lineHeight: 1,
                    }}
                  >
                    {n.fields.autor.fields.nombre} {n.fields.autor.fields.apellido},{' '}
                    <Typography
                      variant='body1'
                      sx={{
                        fontWeight: 'regular',
                        color: COLORS.BASE.DARK_GRAY,
                      }}
                    >
                      {n.fields.autor.fields.cargo}
                    </Typography>
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant='body1'
                    sx={{
                      fontWeight: 'regular',
                      color: COLORS.BASE.DARK_GRAY,
                      textAlign: 'right',
                    }}
                  >
                    {renderNiceDate({date: n.fields.fechaDeEvento, short: true})}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 1,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <ActivityIndicator active={n.fields.activo} />

                    <Typography
                      variant='body1'
                      sx={{
                        fontWeight: 'regular',
                        color: COLORS.BASE.DARK_GRAY,
                      }}
                    >
                      {n.fields.activo ? 'Activo' : 'Inactivo'}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Typography
                variant='h4'
                sx={{
                  fontWeight: 'regular',
                  color: COLORS.PRIMARY.D1,
                }}
              >
                {n.fields.titulo}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontWeight: 'regular',
                  color: COLORS.BASE.DARK_GRAY,
                }}
              >
                {n.fields.descripcion}
              </Typography>

              {n.fields.ubicacion && (
                <Button
                  sx={{
                    width: 'fit-content',
                    textTransform: 'none',
                  }}
                  onClick={() => handleWazeClick(n.fields.ubicacion)}
                >
                  Indicaciones
                  <Image
                    src={Waze}
                    alt='Waze'
                    sx={{
                      width: '16px',
                      height: '16px',
                      marginLeft: '0.5rem',
                    }}
                  />
                </Button>
              )}
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  )
}
