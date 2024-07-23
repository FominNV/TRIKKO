/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			// Basic redirect to monitoring
			{
				source: '/',
				destination: '/monitoring',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
