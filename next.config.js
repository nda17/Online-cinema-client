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
				destination: `http://localhost:4200/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
