import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PromoBanner from '../components/PromoBanner';

export default function QuienesSomos() {
<<<<<<< HEAD
	return (
		<>
			<Head>
				<title>¿Quiénes Somos? | Dental Más</title>
				<meta name="description" content="Conoce la historia, misión y valores de Dental Más." />
			</Head>
			<PromoBanner />
			<Header />
			<main className="container mx-auto px-6 py-12 text-center">
				<h1 className="text-4xl font-bold text-red-500 mb-6">¿Quiénes Somos?</h1>
				<p className="text-lg text-gray-700 mb-8">
					Somos Dental Más, una red de clínicas dentales mexicanas con enfoque en innovación, ética y cercanía. Nuestra misión es democratizar la salud bucal con excelencia y calidez para toda la familia.
				</p>
				<div className="max-w-2xl mx-auto text-gray-600">
					<ul className="space-y-2 text-left">
						<li>• Más de 10,000 pacientes satisfechos</li>
						<li>• Presencia en las principales ciudades</li>
						<li>• Atención para toda la familia</li>
						<li>• Equipo profesional y tecnología avanzada</li>
					</ul>
				</div>
			</main>
			<Footer />
		</>
	);
=======
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
>>>>>>> 179a7c058c14d1c18bd64d1acb40ed2001f09960
}
