import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PromoBanner from '../components/PromoBanner';

export default function Franquicias() {
  return (
    <>
      <Head>
        <title>Franquicias - Dental Mas</title>
        <meta name="description" content="Conviértete en parte de Dental Mas con nuestras franquicias." />
      </Head>
      <PromoBanner />
      <Header />
      <main className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Franquicias</h1>
        <p className="text-lg text-gray-700">Conviértete en parte de Dental Mas con nuestras oportunidades de franquicias.</p>
      </main>
      <Footer />
    </>
  );
}
