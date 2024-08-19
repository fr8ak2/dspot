'use client'

import Image from 'next/image'
import { useState } from 'react'

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
        document.documentElement.classList.add('--prevent-scroll')
        setImageToShow(image)
        setLightBoxDisplay(true)
    }

    const hideLightBox = () => {
        setLightBoxDisplay(false)
        document.documentElement.classList.remove('--prevent-scroll')
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
                <Box className={styles.modal}>
                    <Box className={styles.modalClose} onClick={hideLightBox}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="11"
                            fill="none"
                            viewBox="0 0 11 11"
                        >
                            <rect
                                width="13"
                                height="2"
                                x=".197"
                                y="9.192"
                                fill="#fff"
                                rx="1"
                                transform="rotate(-45 .197 9.192)"
                            />
                            <rect
                                width="13"
                                height="2"
                                x=".197"
                                y="9.192"
                                fill="#fff"
                                rx="1"
                                transform="rotate(-45 .197 9.192)"
                            />
                            <rect
                                width="13"
                                height="2"
                                x="1.611"
                                fill="#fff"
                                rx="1"
                                transform="rotate(45 1.611 0)"
                            />
                            <rect
                                width="13"
                                height="2"
                                x="1.611"
                                fill="#fff"
                                rx="1"
                                transform="rotate(45 1.611 0)"
                            />
                        </svg>
                    </Box>
                    <Box className={styles.modalImg}>
                        <Image
                            className="--cover"
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
