import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgHash from 'lightgallery/plugins/hash'
import LightGallery from 'lightgallery/react'
import './Gallery.css'

import {useCallback, useEffect, useRef, useState} from 'react'
import {Grid} from '@mui/material'
import {useBreakpoint} from '../../hooks/useBreakpoint'

interface Image {
  src: string
  thumb: string
  alt: string
}

interface GalleryProps {
  speed: number
  images: Image[]
}

const thumbnailsPerBreakpoint = {
  sm: 4,
  md: 8,
  lg: 12,
}

export const Gallery = ({speed, images}: GalleryProps) => {
  const [thumbnails, setThumbnails] = useState<Image[]>([])
  const {isMobile} = useBreakpoint()
  const [showThumbnails, setShowThumbnails] = useState<number | undefined>()
  const lightGallery = useRef<any>(null)

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance
    }
  }, [])

  const onOpen = (index: number) => {
    lightGallery.current.openGallery(index)
  }

  useEffect(() => {
    if (showThumbnails) {
      setThumbnails(images.slice(0, showThumbnails))
    }
  }, [showThumbnails, images])

  useEffect(() => {
    if (isMobile) {
      setShowThumbnails(thumbnailsPerBreakpoint.sm)
    } else {
      setShowThumbnails(thumbnailsPerBreakpoint.lg)
    }
  }, [isMobile])

  return (
    <LightGallery
      onInit={onInit}
      plugins={[lgThumbnail, lgZoom, lgHash]}
      speed={speed}
      dynamic={true}
      dynamicEl={images}
    >
      {showThumbnails && (
        <Grid
          container
          spacing={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          {thumbnails.map((image, index) => (
            <Grid
              key={index}
              onClick={() => onOpen(index)}
              sx={{
                cursor: 'pointer',
                maxHeight: '200px',
                overflow: 'hidden',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
              item
              xs={6}
              sm={4}
              lg={2}
            >
              <img
                src={image.thumb}
                alt={image.alt}
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </LightGallery>
  )
}
