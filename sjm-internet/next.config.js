/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://drive.google.com/file/d/1ELEL49hU-rVtPiKcSfOWMHIJ472HHnOv/view?usp=drive_link'
          },
        ],
      },
}

module.exports = nextConfig
