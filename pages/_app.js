import React from 'react';
import Head from 'next/head';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/@phosphor-icons/web@2.1.1/src/index.js" async />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
