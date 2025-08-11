import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Pacientes() {
  return (
    <>
      <Head>
        <title>Pacientes - Dental Mas</title>
        <meta name="description" content="Información para nuestros pacientes." />
      </Head>
      <Header />
      <main className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Pacientes</h1>
        <p className="text-lg text-gray-700">Encuentra toda la información que necesitas como paciente de Dental Mas.</p>
      </main>
      <Footer />
    </>
  );
}
