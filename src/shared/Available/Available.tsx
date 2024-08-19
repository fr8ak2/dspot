'use client'

import { clsx } from 'clsx'
import { FC, useEffect, useState } from 'react'

import { Box } from '@/shared'

import styles from './Available.module.scss'

type Size = 'small' | 'medium' | 'large' | undefined

interface AvailableProps {
    available: boolean
    size?: Size
}

export const Available: FC<AvailableProps> = (props: AvailableProps) => {
    const { available, size } = props
    const [indicator, setIndicator] = useState(false)

    useEffect(() => {
        setIndicator(available)
    }, [available])

    return (
        <Box
            className={clsx(styles.module, {
                [styles.small ?? '']: size === 'small',
                [styles.medium]: size === 'medium',
                [styles.large]: size === 'large',
            })}
        >
            <span
                className={!indicator ? styles.offline : styles.online}
            ></span>
        </Box>
    )
}
