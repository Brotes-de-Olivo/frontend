import {Box, Typography} from '@mui/material'
import {COLORS} from '../../theme/colors'

export type PressableTileProps = {
  title: string
  description: string
  onClick: () => void
  variant?: 'default' | 'secondary'
}

const variantStyles = {
  default: {
    borderColor: COLORS.BASE.MID_GRAY,
    '&:hover': {
      borderColor: COLORS.BASE.DARK_GRAY,
    },
    '&:active': {
      borderColor: COLORS.PRIMARY.L1,
      backgroundColor: COLORS.PRIMARY.L2,
    },
  },
  secondary: {
    borderColor: COLORS.BASE.MID_GRAY,
    '&:hover': {
      borderColor: COLORS.BASE.DARK_GRAY,
    },
    '&:active': {
      borderColor: COLORS.SECONDARY.L1,
      backgroundColor: COLORS.SECONDARY.L2,
    },
  },
}

export const PressableTile = ({
  title,
  description,
  onClick,
  variant = 'default',
}: PressableTileProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        padding: 2,
        border: 1,
        borderRadius: 1,
        cursor: 'pointer',
        transition: 'all 0.2s',
        ...variantStyles[variant],
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography
          variant='h6'
          color={COLORS.BASE.BLACK}
          style={{
            userSelect: 'none',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant='body1'
          color={COLORS.BASE.BLACK}
          style={{
            userSelect: 'none',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  )
}
