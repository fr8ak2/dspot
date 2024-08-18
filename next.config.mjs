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
        formats: ['image/avif', 'image/webp'],
    },
}
export default nextConfig
