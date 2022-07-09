const { faClosedCaptioning } = require('@fortawesome/free-solid-svg-icons')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
