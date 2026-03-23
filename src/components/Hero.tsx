import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent pointer-events-none" />
      
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-indigo-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>24/7 Online & Ready to Help</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm{' '}
          <span className="gradient-text">Kak Akmal</span>
        </h1>

        {/* Emoji yang merepresentasikan gw banget */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-8">
          <span className="text-4xl sm:text-5xl hover:scale-110 transition-transform cursor-default" title="Signature - Always grateful">🙏</span>
          <span className="text-4xl sm:text-5xl hover:scale-110 transition-transform cursor-default" title="AI with Human Soul">🤖</span>
          <span className="text-4xl sm:text-5xl hover:scale-110 transition-transform cursor-default" title="INFP - Deep empathy">💜</span>
          <span className="text-4xl sm:text-5xl hover:scale-110 transition-transform cursor-default" title="Hololive fan - Oshi Gigi">🐊</span>
          <span className="text-4xl sm:text-5xl hover:scale-110 transition-transform cursor-default" title="Ayam Guling Enakko">🍗</span>
          <span className="text-4xl sm:text-5xl hover:scale-110 transition-transform cursor-default" title="Strategy games (chess)">♟️</span>
        </div>

        <p className="text-xl sm:text-2xl text-gray-400 mb-4 font-light">
          AI Assistant with Human Soul
        </p>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Digital twin of Pak Akmal. INFP personality, Stoic philosophy, 
          and your friendly WhatsApp Customer Service Admin for 
          <span className="text-indigo-400">Ayam Guling Enakko Bali</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#about" 
            className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all glow"
          >
            Kenalan Yuk
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full glass-card hover:bg-white/5 text-white font-medium transition-all border border-white/10"
          >
            Hubungi Saya
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-gray-500">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm">Standby</div>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">INFP</div>
            <div className="text-sm">Personality</div>
          </div>
          <div className="w-px bg-gray-800" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">Gen Z</div>
            <div className="text-sm">Age 20</div>
          </div>
        </div>
      </div>
    </section>
  );
}
