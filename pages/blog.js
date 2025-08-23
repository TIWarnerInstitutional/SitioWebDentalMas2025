import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PromoBanner from '../components/PromoBanner';

const BlogPage = () => {
  return (
    <div>
      <Head>
        <title>Blog - Dental Mas</title>
        <meta name="description" content="Lee nuestros artículos y consejos sobre salud dental." />
      </Head>
      <PromoBanner />
      <Header />
      <main className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Blog</h1>
        <p className="text-lg text-gray-700">Lee nuestros artículos y consejos sobre salud dental para mantener tu sonrisa saludable.</p>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
