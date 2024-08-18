import 'styles/app.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

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
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

export default RootLayout
