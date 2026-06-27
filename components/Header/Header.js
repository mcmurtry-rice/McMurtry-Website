import React from 'react'
import NextHead from 'next/head'

const Header = () => (
  <NextHead>
    <meta charSet="utf-8" />
    <link rel="shortcut icon" type="image/x-icon" href="/static/logos/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Instrument+Sans:wdth,wght@75..100,400;75..100,500;75..100,600;75..100,700&family=Instrument+Serif:ital@0;1&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600;1,700&family=Work+Sans:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#3d2a5e" />
    <title>McMurtry College</title>
  </NextHead>
)

export default Header;
