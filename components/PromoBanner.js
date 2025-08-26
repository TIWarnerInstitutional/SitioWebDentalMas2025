import { useEffect, useState } from 'react';
import { HiOutlineStar } from 'react-icons/hi';
export default function PromoBanner() {
  // Timer persistente y evitar hydration error
  const TIMER_KEY = 'promo-timer';
  const INITIAL_SECONDS = 1800; // 30 minutos
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(TIMER_KEY);
    if (saved) {
      setSeconds(parseInt(saved, 10));
    }
    const interval = setInterval(() => {
      setSeconds(prev => {
        const next = prev > 0 ? prev - 1 : 0;
        localStorage.setItem(TIMER_KEY, next);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Formato mm:ss
  const formatTime = s => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const ss = (s % 60).toString().padStart(2, '0');
    return `${m}:${ss}`;
  };
  return (
  <div className="w-full bg-[#FE0000] text-white text-center py-1 md:py-2 font-bold font-sans text-sm md:text-base shadow-md flex flex-wrap items-center justify-center gap-1 md:gap-2">
      <span>✨</span>
    <span>¡Obten una promoción especial!</span>
      {mounted && (
        <span className="ml-2 px-2 py-1 rounded bg-black/20 font-mono text-base tracking-widest">{formatTime(seconds)}</span>
      )}
      <span>✨</span>
    </div>
  );
}
