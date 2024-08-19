import 'styles/app.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { LayoutDefault } from '@/layouts/LayoutDefault'

const inter = Inter({
    weight: ['400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Friends App',
    description: 'Explore detailed information about listed friends',
}

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode
}>) => {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <LayoutDefault>{children}</LayoutDefault>
            </body>
        </html>
    )
}

export default RootLayout
