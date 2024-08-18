import { FC, ReactNode } from 'react'

import { PageFlow } from '@/layouts'
import { Box } from '@/shared/Box/Box'

export interface LayoutProps {
    children: ReactNode
}

export const LayoutDefault: FC<LayoutProps> = ({ children }) => (
    <Box className="page">
        <PageFlow>{children}</PageFlow>
    </Box>
)
