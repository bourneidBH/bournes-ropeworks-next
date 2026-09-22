/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/bournes-ropeworks-next" : "",
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
