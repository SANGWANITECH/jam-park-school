/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Fix for accessing from phone using network IP
  allowedDevOrigins: [
    'localhost',
    '192.168.43.50',     // Your current network IP
    '10.83.37.92',       // Previous IP that appeared
    '*.local',           // Optional: for .local domains
  ],
};

export default nextConfig;