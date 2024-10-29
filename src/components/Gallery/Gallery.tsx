import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgHash from 'lightgallery/plugins/hash'
import LightGallery from 'lightgallery/react'
import './Gallery.css'

import {useCallback, useEffect, useRef, useState} from 'react'
import {useBreakpoint} from '../../hooks/useBreakpoint'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import {Asset} from 'contentful'
import {Box} from '@mui/material'

export interface ImageType {
  src: string
  thumb: string
  alt: string
}

interface GalleryProps {
  speed: number
  images: Asset[] | undefined
}

const thumbnailsPerBreakpoint = {
  sm: 4,
  md: 8,
  lg: 12,
}

const LIGHT_GALLERY_LICENSE_KEY = import.meta.env.VITE_LIGHT_GALLERY_LICENSE_KEY

export const Gallery = ({speed, images}: GalleryProps) => {
  const [thumbnails, setThumbnails] = useState<ImageType[]>([])
  const [lgImages, setLgImages] = useState<ImageType[]>([])
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
    if (showThumbnails && images) {
      setThumbnails(
        images.slice(0, showThumbnails).map((image) => ({
          src: image.fields.file.url,
          thumb: image.fields.file.url,
          alt: image.fields.title,
        }))
      )
    }

    if (images) {
      setLgImages(
        images.map((image) => ({
          src: image.fields.file.url,
          thumb: image.fields.file.url,
          alt: image.fields.title,
        }))
      )
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
    <Box width='100%'>
      <LightGallery
        onInit={onInit}
        plugins={[lgThumbnail, lgZoom, lgHash]}
        speed={speed}
        dynamic={true}
        dynamicEl={lgImages}
        licenseKey={LIGHT_GALLERY_LICENSE_KEY}
      >
        {showThumbnails && (
          <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 900: 4, 1200: 5}}>
            <Masonry gutter='0.5rem'>
              {thumbnails.map((thumb, index) => (
                <Box
                  key={index}
                  onClick={() => onOpen(index)}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                >
                  <img
                    src={thumb.thumb}
                    alt={thumb.alt}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </Box>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </LightGallery>
    </Box>
  )
}
