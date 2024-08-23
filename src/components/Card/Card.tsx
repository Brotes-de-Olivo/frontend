import {Box, Card as MuiCard, Typography} from '@mui/material'
import {COLORS} from '../../theme/colors'

export interface CardProps {
  icon: React.ReactNode
  title: string
  description: string
  backgroundColor?: string
  textColor?: string
}

export const Card = ({
  description,
  icon,
  title,
  backgroundColor,
  textColor = COLORS.BASE.WHITE,
}: CardProps) => {
  return (
    <MuiCard
      sx={{
        backgroundColor,
        borderRadius: '1rem',
        boxShadow: 6,
        width: '100%',
        maxWidth: '400px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          padding: '2rem',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {icon}
        <Typography
          variant='h4'
          sx={{
            color: textColor,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            color: textColor,
          }}
        >
          {description}
        </Typography>
      </Box>
    </MuiCard>
  )
}
