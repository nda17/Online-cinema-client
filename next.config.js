/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://92.118.113.223:4200/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination: `http://92.118.113.223:4200/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
