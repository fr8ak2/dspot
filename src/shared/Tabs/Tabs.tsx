'use client'

import { clsx } from 'clsx'
import React, { ReactNode, useState } from 'react'

import { Box } from '@/shared'

import styles from './Tabs.module.scss'

interface TabProps {
    labels: string[]
    children: ReactNode[]
}

export const Tabs: React.FC<TabProps> = ({ labels, children }) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Box className={styles.module}>
            <Box className={styles.labels}>
                {labels.map((label, index) => (
                    <Box
                        className={clsx(
                            styles.label,
                            activeTab === index ? styles.active : '',
                        )}
                        onClick={() => setActiveTab(index)}
                        key={index}
                    >
                        {label}
                    </Box>
                ))}
            </Box>

            <Box className={styles.content}>
                {children.map((child, index) => (
                    <Box
                        className={clsx(
                            styles.tab,
                            activeTab === index ? styles.show : '',
                        )}
                        key={index}
                    >
                        {child}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
