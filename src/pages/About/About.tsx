import {Box, Typography, Button, Grid, List, ListItem, CircularProgress} from '@mui/material'
import {COLORS} from '../../theme/colors'
import {Gallery, Link, StaggeredBackgroundImage} from '../../components'
import {EntryTypes, useBreakpoint, useContentful} from '../../hooks'
import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'

export const About = () => {
  const {isMobile} = useBreakpoint()
  const {getEntry} = useContentful()
  const [entry, setEntry] = useState<EntryTypes['SobreNosotros'] | null>(null)
  const [entryGallery, setEntryGallery] = useState<EntryTypes['Gallery'] | null>(null)
  const [loading, setLoading] = useState(true)
  const {t, i18n} = useTranslation()

  useEffect(() => {
    const fetchData = async () => {
      const entry = await getEntry({
        entryId: 'K5mRgNQrWMRedJUqNDNaV',
        locale: i18n.language,
      })
      const entryGallery = await getEntry({
        entryId: '43ziZHbqZntTuOtba5C3HV',
        locale: i18n.language,
      })

      setEntry(entry as EntryTypes['SobreNosotros'])
      setEntryGallery(entryGallery as EntryTypes['Gallery'])

      setLoading(false)
    }
    fetchData()
  }, [i18n.language])

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
          {t('aboutUs.title')}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            maxWidth: '800px',
          }}
        >
          {entry?.fields.descripcionPrincipal}
        </Typography>
        <Link href='/contact'>
          <Button variant='contained'>
            <Typography>{t('constants.navigation.contact')}</Typography>
          </Button>
        </Link>
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
          sx={{
            marginBottom: isMobile ? '2rem' : '0',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '700px',
            width: isMobile ? '100%' : '50%',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              color: COLORS.PRIMARY.D1,
            }}
          >
            {t('aboutUs.ourMission')}
          </Typography>
          <Typography variant='body1'>{entry?.fields.nuestraMision}</Typography>
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
            width: isMobile ? '100%' : '50%',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              color: COLORS.SECONDARY.D1,
            }}
          >
            {t('aboutUs.ourVision')}
          </Typography>
          <Typography variant='body1'>{entry?.fields.nuestraVision}</Typography>
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
          {t('aboutUs.ourHistory')}
        </Typography>
        <Typography variant='body1' sx={{textAlign: 'left'}}>
          {entry?.fields.nuestraHistoria}
        </Typography>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          padding: isMobile ? '2rem' : '8rem',
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
            {t('aboutUs.ourServices')}
          </Typography>
          <Typography variant='body1'>{entry?.fields.descripcionServicios}</Typography>
        </Box>

        <Box
          sx={{
            width: isMobile ? '100%' : '45%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              listStyleType: 'disc',
            }}
          >
            {entry?.fields.servicios.map((service, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'list-item',
                }}
              >
                <Typography variant='body2'>{service}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
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
          {t('aboutUs.gallery')}
        </Typography>

        <Gallery images={entryGallery?.fields.photos} speed={500} />
      </Box>
    </Box>
  )
}
