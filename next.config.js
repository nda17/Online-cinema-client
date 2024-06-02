/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://nda17-online-cinema-server-7253.twc1.net/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination: `https://nda17-online-cinema-server-7253.twc1.net/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
