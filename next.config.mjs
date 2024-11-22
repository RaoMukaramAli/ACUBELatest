/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    USER_EMAIL: process.env.USER_EMAIL,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
