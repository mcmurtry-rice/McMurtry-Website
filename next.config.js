// next.config.js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    NEXT_PUBLIC_SUPABASE_URL:      process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  async redirects() {
    return [
      { source: '/', destination: '/home/index', permanent: false },
      { source: '/home', destination: '/home/index', permanent: false },
    ];
  },
})
