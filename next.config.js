const withPwa = require('next-pwa')

/** @type {import('next').NextConfig} */
module.exports = withPwa({
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV !== 'production',
	},
})
