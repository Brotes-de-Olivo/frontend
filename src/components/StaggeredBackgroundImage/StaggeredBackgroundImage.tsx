import {Box, SxProps} from '@mui/material'
import {COLORS} from '../../theme/colors'
import {Image} from '../Image'

export const StaggeredBackgroundImage = ({
  src,
  alt,
  width,
  height,
  backgroundPosition = 'left',
  backgroundColor = COLORS.SECONDARY.PRIMARY,
  sx,
}: {
  src: string
  alt: string
  width: string
  height: string
  backgroundPosition?: 'left' | 'right'
  backgroundColor?: string
  sx?: SxProps
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width,
        height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Image
        src={src}
        alt={alt}
        sx={{
          width,
          height,
          position: 'absolute',
          borderRadius: '10px',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '15px',
          left: backgroundPosition === 'left' ? '-15px' : 'auto',
          right: backgroundPosition === 'right' ? '-15px' : 'auto',
          width,
          height,
          backgroundColor,
          zIndex: '-1',
          borderRadius: '10px',
        }}
      />
    </Box>
  )
}
