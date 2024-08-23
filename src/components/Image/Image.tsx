import {CSSProperties} from 'react'

export interface ImageProps {
  src: string
  alt: string
  sx?: CSSProperties
}

export const Image = ({alt, src, sx}: ImageProps) => {
  return <img src={src} alt={alt} style={sx} />
}
