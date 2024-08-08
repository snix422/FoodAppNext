/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    api: {
        bodyParser: {
            sizeLimit: '10mb', // Ustaw limit na 10MB
        },
    },
};

export default nextConfig;