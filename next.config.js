/** @type {import('next').NextConfig} */
const nextConfig = {
  // A production build normally writes to .next, which the dev server
  // is also using — so NEXT_DIST_DIR lets a build run without stopping
  // dev. Unset, nothing changes.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      // YouTube thumbnails for the lecture links on the verse pages.
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

module.exports = nextConfig;
