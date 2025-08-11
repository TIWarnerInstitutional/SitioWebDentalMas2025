import '../styles/globals.css';
import Head from 'next/head';
import CookieAlert from '../components/CookieAlert';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <CookieAlert />
    </>
  );
}
