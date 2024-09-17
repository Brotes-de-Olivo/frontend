import {CSSProperties} from 'react'

export interface ImageProps {
  src: string
  alt: string
  sx?: CSSProperties
}

export const Image = ({alt, src, sx}: ImageProps) => {
  const styles: CSSProperties = {
    objectFit: 'cover',
    maxWidth: '100%',
    ...sx,
  }

  return <img src={src} alt={alt} style={styles} />
}
