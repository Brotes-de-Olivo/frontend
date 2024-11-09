import {EmailOutlined, LocalPhoneOutlined, PermIdentityOutlined} from '@mui/icons-material'
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import {Image, Link} from 'components'
import {useEffect, useState} from 'react'
import {COLORS} from 'theme/colors'
import * as z from 'zod'
import Waze from 'assets/waze.webp'
import {RADIUS} from 'theme/radius'
import {SEND_EMAIL} from 'api'
import {useMutation} from '@apollo/client'
import toast from 'react-hot-toast'
import {useBreakpoint} from 'hooks'

const CONTACT_NUMBER = '+506 2240 8655'

const ContactSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido').max(50, 'El nombre es muy largo'),
  lastName: z.string().min(2, 'El apellido es requerido').max(50, 'El apellido es muy largo'),
  email: z.string().email('El correo no es valido'),
  phoneNo: z
    .string()
    .regex(
      /^(\+\d{3}[-\s]?)?(\(?\d{3}\)?[-\s]?)?\d{4}[-\s]?\d{4}$|^\d{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}$/,
      'El número de teléfono no es valido'
    )
    .nullable(),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje es muy largo'),
})

export type ContactProps = z.infer<typeof ContactSchema>

export type ContactErrors = {
  name?: string[]
  lastName?: string[]
  email?: string[]
  phoneNo?: string[]
  message?: string[]
}

const INITIAL_FORM: ContactProps = {
  name: '',
  lastName: '',
  email: '',
  phoneNo: '',
  message: '',
}

export const Contact = () => {
  const [form, setForm] = useState<ContactProps>(INITIAL_FORM)
  const [errors, setErrors] = useState<ContactErrors>()
  const [sendEmail, {loading}] = useMutation(SEND_EMAIL)
  const [validForm, setValidForm] = useState(false)
  const {isMobile} = useBreakpoint()

  const handleSend = () => {
    try {
      const data = ContactSchema.parse(form)

      sendEmail({
        variables: {
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          phoneNo: data.phoneNo,
          message: data.message,
        },
      })
        .then(() => {
          setForm(INITIAL_FORM)
          toast.success('Correo enviado correctamente')
          setErrors(undefined)
        })
        .catch(() => {
          toast.error('Error al enviar el correo')
        })
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.formErrors.fieldErrors)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    try {
      ContactSchema.parse({...form, [name]: value})
      setErrors({...errors, [name]: undefined})
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors({...errors, [name]: error.formErrors.fieldErrors[name]})
      }
    }

    setForm({...form, [name]: value})
  }

  useEffect(() => {
    try {
      ContactSchema.parse(form)
      setErrors(undefined)
      setValidForm(true)
    } catch (error) {
      setValidForm(false)
    }
  }, [form])

  const handleWazeClick = () => {
    window.open('https://ul.waze.com/ul?preview_venue_id=180813924.1808335845.3976015&navigate=yes')
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '100%' : '50%',
            height: '100%',
          }}
        >
          <Image
            src='https://via.placeholder.com/500x350'
            alt='Contact'
            sx={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>

        <Box
          sx={{
            width: isMobile ? '100%' : '50%',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              color: COLORS.PRIMARY.D1,
              fontWeight: 'medium',
            }}
          >
            Pongámonos en Contacto
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: COLORS.BASE.DARK_GRAY,
              fontWeight: 'medium',
            }}
          >
            O, puede mandarnos un correo a
            <Link
              href='mailto:hogarbrotesdeolivo@gmail.com'
              sx={{
                color: COLORS.SECONDARY.D2,
                fontWeight: 'medium',
              }}
            >
              {' '}
              hogarbrotesdeolivo@gmail.com
            </Link>
          </Typography>

          <Divider sx={{marginY: 2}} color={COLORS.PRIMARY.D2} />

          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 2,
              }}
            >
              <FormControl fullWidth sx={{marginBottom: 2}}>
                <TextField
                  id='name'
                  name='name'
                  value={form.name}
                  onChange={handleInputChange}
                  error={Boolean(errors?.name)}
                  helperText={errors?.name}
                  label='Nombre'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PermIdentityOutlined />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </FormControl>

              <FormControl fullWidth sx={{marginBottom: 2}}>
                <TextField
                  id='lastName'
                  name='lastName'
                  value={form.lastName}
                  onChange={handleInputChange}
                  error={Boolean(errors?.lastName)}
                  helperText={errors?.lastName}
                  label='Apellido'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PermIdentityOutlined />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </FormControl>
            </Box>

            <FormControl fullWidth sx={{marginBottom: 2}}>
              <TextField
                id='email'
                name='email'
                value={form.email}
                onChange={handleInputChange}
                error={Boolean(errors?.email)}
                helperText={errors?.email}
                label='Correo'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EmailOutlined />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </FormControl>

            <FormControl fullWidth sx={{marginBottom: 2}}>
              <TextField
                id='phoneNo'
                name='phoneNo'
                value={form.phoneNo}
                onChange={handleInputChange}
                error={Boolean(errors?.phoneNo)}
                helperText={errors?.phoneNo}
                label='Teléfono'
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocalPhoneOutlined />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </FormControl>

            <FormControl fullWidth sx={{marginBottom: 2}}>
              <TextField
                id='message'
                name='message'
                value={form.message}
                onChange={handleInputChange}
                error={Boolean(errors?.message)}
                helperText={errors?.message}
                label='Mensaje'
                multiline
                rows={4}
              />
            </FormControl>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 2,
              }}
            >
              <Button
                variant='contained'
                color='primary'
                sx={{
                  borderRadius: 'lg',
                  textTransform: 'none',
                }}
                onClick={handleSend}
                disabled={loading || !validForm}
                endIcon={loading ? <CircularProgress size={20} /> : undefined}
              >
                {loading ? 'Enviando' : 'Enviar'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-around ',
          gap: 2,
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: isMobile ? '100%' : '50%',
            height: '100%',
            gap: 8,
          }}
        >
          <Typography variant='h2' sx={{color: COLORS.PRIMARY.D1, fontWeight: 'medium'}}>
            ¿Dónde nos encontramos?{' '}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              padding: 2,
              borderRadius: RADIUS.md,
              backgroundColor: COLORS.SECONDARY.L2,
              justifyContent: 'space-evenly',
              height: '200px',
            }}
          >
            <Typography variant='body1' sx={{color: COLORS.BASE.BLACK, fontWeight: 'medium'}}>
              La Florida de Tibás, de Rostipollos 300 Norte, 100 Oeste y 25 Norte o Apartado Postal
              1450-1100 , San José, Costa Rica
            </Typography>

            <Button
              sx={{
                width: 'fit-content',
                textTransform: 'none',
              }}
              onClick={handleWazeClick}
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
          </Box>
        </Box>

        <Box>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15718.475428334636!2d-84.0667068!3d9.9656346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e4f3cbc1a669%3A0xe629d10b912182c1!2sHogar%20Infantil%20Brotes%20de%20Olivo!5e0!3m2!1sen!2scr!4v1730171802656!5m2!1sen!2scr'
            width={isMobile ? '100%' : '650'}
            height='450'
            style={{border: 0}}
            loading='lazy'
          ></iframe>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          padding: 2,
          paddingBottom: 8,
        }}
      >
        <Typography
          variant='h2'
          sx={{
            color: COLORS.PRIMARY.D1,
            fontWeight: 'medium',
          }}
        >
          Llámenos directamente
        </Typography>

        <Typography
          variant='body1'
          sx={{
            color: COLORS.BASE.DARK_GRAY,
            fontWeight: 'medium',
          }}
        >
          Estamos disponibles de Lunes a Viernes de 8:00 a.m. a 5:00 p.m.
        </Typography>

        <Typography
          variant='body1'
          sx={{
            color: COLORS.BASE.DARK_GRAY,
            fontWeight: 'medium',
          }}
        >
          <Link href='tel:+50622408655'>+506 2240 8655</Link>
        </Typography>
      </Box>
    </>
  )
}
