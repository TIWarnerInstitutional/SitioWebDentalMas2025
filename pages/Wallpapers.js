
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Wallpapers() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	const [isLaunched, setIsLaunched] = useState(false);

	useEffect(() => {
		const targetDate = new Date("2025-09-01T00:00:00-06:00").getTime();
		const updateCountdown = () => {
			const now = new Date().getTime();
			const distance = targetDate - now;
			if (distance < 0) {
				setIsLaunched(true);
				return;
			}
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			setTimeLeft({ days, hours, minutes, seconds });
		};
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	}, []);

	const formatNumber = (num) => num < 10 ? `0${num}` : num;

	return (
		<>
			<Head>
				<title>Campaña de Imagen Nacional Dental+</title>
				<meta name="description" content="Prepárese para algo extraordinario. La nueva campaña de Dental+ está por llegar." />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<div className="relative w-screen h-screen flex justify-center md:justify-end items-center overflow-hidden">
				{/* Imagen de fondo */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/Fondo.jpg"
						alt="Fondo de la Campaña"
						fill
						className="object-cover"
						priority
					/>
				</div>
				{/* Contenido */}
				<div className="relative z-10 w-full max-w-[400px] sm:max-w-[450px] md:w-[45%] lg:w-[40%] xl:w-[35%] h-auto p-4 sm:p-6 md:p-8 mx-4 sm:mx-6 md:mr-8 lg:mr-16 xl:mr-20 flex flex-col justify-center items-center text-center space-y-3 sm:space-y-4">
					{/* Logo Warner */}
					<div className="mb-2 sm:mb-3 md:mb-4">
						<Image
							src="/Logo warner negro.png"
							alt="Warner Institutional S.C. Logo"
							width={140}
							height={50}
							className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto"
						/>
					</div>
					{/* Título de campaña */}
					<div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#2F4F7A] mb-1 sm:mb-2 font-['Roboto'] leading-tight text-center px-2">
						Campaña de Imagen Nacional
					</div>
					{/* Logo Dental+ */}
					<div className="flex flex-col items-center mb-3 sm:mb-4 md:mb-5">
						<Image
							src="/dental + logo-rgb-01.png"
							alt="Dental+ Logo"
							width={300}
							height={90}
							className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[390px] h-auto"
						/>
					</div>
					{/* Texto preparate */}
					<div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.4rem] font-normal mb-2 text-[#000080] px-2 text-center">
						Prepárese para algo extraordinario.
					</div>
					{/* Contador */}
					{!isLaunched ? (
						<div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-2 flex-wrap px-2">
							{[
								{ value: timeLeft.days, label: 'DÍAS' },
								{ value: timeLeft.hours, label: 'HORAS' },
								{ value: timeLeft.minutes, label: 'MINUTOS' },
								{ value: timeLeft.seconds, label: 'SEGUNDOS' }
							].map((item, index) => (
								<div
									key={index}
									className="bg-[#2F4F7A] text-white p-2 sm:p-3 md:p-4 lg:px-5 lg:py-4 xl:px-6 xl:py-4 rounded-lg flex flex-col items-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px] lg:min-w-[90px]"
								>
									<span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-1 font-['Roboto'] leading-none">
										{formatNumber(item.value)}
									</span>
									<span className="text-[10px] sm:text-xs md:text-sm uppercase font-normal leading-tight">
										{item.label}
									</span>
								</div>
							))}
						</div>
					) : (
						<div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2F4F7A] animate-pulse mb-2 px-2 text-center">
							¡LANZAMIENTO!
						</div>
					)}
					{/* Texto final */}
					<div className="text-sm sm:text-base md:text-lg lg:text-[1.1rem] text-gray-600 italic px-2 text-center">
						{isLaunched ? "¡Gracias por su espera!" : "Lo mejor está por venir..."}
					</div>
				</div>
			</div>
			<style jsx>{`
				@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Open+Sans:wght@400;700&display=swap');
				body {
					font-family: 'Open Sans', sans-serif;
					margin: 0;
					overflow-x: hidden;
				}
				@keyframes pulse {
					0% { transform: scale(1); opacity: 1; }
					100% { transform: scale(1.05); opacity: 0.9; }
				}
				.animate-pulse {
					animation: pulse 1.5s infinite alternate;
				}
			`}</style>
		</>
	);
}
