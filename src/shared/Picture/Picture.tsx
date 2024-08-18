import Image, { StaticImageData } from 'next/image'
import { FC, MutableRefObject } from 'react'

import { Box } from '@/shared'

interface PictureProps {
    className?: string
    classNameImg?: string
    data?: StaticImageData | undefined
    fill?: boolean
    priority?: boolean
    quality?: number | undefined
    alt?: string | undefined
    obj?: MutableRefObject<HTMLDivElement | null>
}

export const Picture: FC<PictureProps> = ({
    className,
    classNameImg,
    data,
    fill = false,
    priority = false,
    quality,
    alt,
    obj,
    ...props
}) => {
    return (
        <>
            <Box className={className} ref={obj} {...props}>
                <Image
                    className={classNameImg}
                    src={data?.src || ''}
                    fill={fill}
                    width={!fill ? data?.width : undefined}
                    height={!fill ? data?.height : undefined}
                    quality={quality}
                    priority={priority}
                    alt={alt || ''}
                />
            </Box>
        </>
    )
}
