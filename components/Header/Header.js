import React from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { SITE, getPageMeta, getJsonLd, absoluteUrl } from '../../SEO/pages'

// Per-page title, description, and search/social tags all come from
// SEO/pages.js, looked up by the current route.
const Header = () => {
  const { pathname } = useRouter();
  const meta = getPageMeta(pathname);
  const jsonLd = getJsonLd(pathname);

  if (process.env.NODE_ENV !== 'production' && !meta.known) {
    console.warn(`[seo] No entry for "${meta.path}" in SEO/pages.js`);
  }

  return (
    <NextHead>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/logos/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Instrument+Sans:wdth,wght@75..100,400;75..100,500;75..100,600&family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#3d2a5e" />

      <title>{meta.title}</title>
      <meta name="description" content={meta.description} key="description" />
      <link rel="canonical" href={meta.url} key="canonical" />
      {meta.noindex ? <meta name="robots" content="noindex" key="robots" /> : null}
      {SITE.googleSiteVerification ? (
        <meta name="google-site-verification" content={SITE.googleSiteVerification} />
      ) : null}

      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:site_name" content={SITE.name} key="og:site_name" />
      <meta property="og:locale" content={SITE.locale} key="og:locale" />
      <meta property="og:title" content={meta.title} key="og:title" />
      <meta property="og:description" content={meta.description} key="og:description" />
      <meta property="og:url" content={meta.url} key="og:url" />
      <meta property="og:image" content={absoluteUrl(meta.image.path)} key="og:image" />
      <meta property="og:image:width" content={String(meta.image.width)} key="og:image:width" />
      <meta property="og:image:height" content={String(meta.image.height)} key="og:image:height" />
      <meta property="og:image:alt" content={meta.image.alt} key="og:image:alt" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />

      {jsonLd ? (
        <script
          type="application/ld+json"
          key="jsonld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </NextHead>
  );
};

export default Header;
