/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bayswaterdentist.com.au',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },
        ],
    },
};

module.exports = nextConfig;