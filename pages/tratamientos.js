import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TratamientosPage = () => {
  return (
    <div>
      <Head>
  <title>Tratamientos - Dental Mas</title>
        <meta name="description" content="Descubre los tratamientos dentales que ofrecemos." />
      </Head>
      <Header />
      <main className="container mx-auto px-6 py-12 text-center">
  <h1 className="text-4xl font-bold text-red-500 mb-6">Tratamientos</h1>
        <p className="text-lg text-gray-700">Descubre los tratamientos dentales que ofrecemos para cuidar tu sonrisa.</p>
      </main>
      <Footer />
    </div>
  );
};

export default TratamientosPage;
