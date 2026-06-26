// next.config.js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  // No basePath needed for custom domain deployment

  // Public env vars exposed to the browser. Next.js 9 reads these from
  // process.env at build time via the `env` block (Next.js 9.4+).
  // Values are read from .env.local (or .env) and then baked into the
  // client bundle as plain strings.
  env: {
    NEXT_PUBLIC_SUPABASE_URL:      process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
})
