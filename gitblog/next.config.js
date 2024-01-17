/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true,
    swcMinify: true,
    images:{
        domains: ["vercel.app"],
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "***.***.***",
                port:"",
                pathname:"/dashboard"
            }
        ]
    },
    webpack: (config) =>{
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto",
        });
        return config;
    }
}

module.exports = nextConfig
