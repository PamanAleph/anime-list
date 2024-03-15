    /** @type {import('next').NextConfig} */
    const nextConfig = {
        images: {
            remotePatterns: [
                {
                    hostname: "cdn.myanimelist.net"
                },
                {
                    hostname: "user-images.githubusercontent.com"
                }
            ]
        }
    };

    export default nextConfig;
