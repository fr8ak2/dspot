import path from 'path'
import { fileURLToPath } from 'url'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    sassOptions: {
        includePaths: [
            path.join(path.dirname(fileURLToPath(import.meta.url)), 'styles'),
        ],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flic.kr',
                port: '',
                pathname: '/p/**',
            },
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                port: '',
                pathname: '/p/**',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },
}
export default nextConfig
