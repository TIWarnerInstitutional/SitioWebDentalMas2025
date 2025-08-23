import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PromoBanner from '../components/PromoBanner';

export default function QuienesSomos() {
  return (
    <>
      <Head>
        <title>¿Quiénes Somos? - Dental Mas</title>
        <meta name="description" content="Conoce más sobre Dental Mas, nuestra misión y equipo." />
      </Head>
      <PromoBanner />
      <Header />
      <main className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-red-500 mb-4">¿Quiénes Somos?</h1>
        <p className="text-lg text-gray-700 mb-6">Somos Dental Mas, una clínica comprometida con tu salud bucal y bienestar.</p>
        {/* Agrega aquí más información sobre la empresa, misión, visión, equipo, etc. */}
      </main>
      <Footer />
    </>
  );
}
