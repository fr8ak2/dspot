'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Photos } from '@/mock/photos'
import { Box } from '@/shared'

import styles from './Lightbox.module.scss'

interface LightboxProps {
    images: Photos[]
}

export const Lightbox = ({ images }: LightboxProps) => {
    const [imageToShow, setImageToShow] = useState('')
    const [lightboxDisplay, setLightBoxDisplay] = useState(false)

    const showImage = (image: string) => {
        setImageToShow(image)
        setLightBoxDisplay(true)
    }

    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }

    return (
        <>
            {images.map((image, index) => (
                <Box className={styles.img} key={index}>
                    <Image
                        className="--cover"
                        onClick={() => showImage(image.img)}
                        src={image.img}
                        fill
                        alt=""
                    />
                </Box>
            ))}

            {lightboxDisplay ? (
                <Box className={styles.modal} onClick={hideLightBox}>
                    <Box className={styles.modalImg}>
                        <Image
                            className="--contain"
                            src={imageToShow}
                            fill
                            alt=""
                        />
                    </Box>
                </Box>
            ) : (
                ''
            )}
        </>
    )
}
