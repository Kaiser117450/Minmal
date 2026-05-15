import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #0a1530 0%, #1a2a52 50%, #0a1530 100%)' }}>
      
      {/* Colorful sticker dots decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[8%] w-3 h-3 rounded-full opacity-40" style={{ background: '#ffe8d4' }} />
        <div className="absolute top-[25%] right-[12%] w-2.5 h-2.5 rounded-full opacity-40" style={{ background: '#d9f3e1' }} />
        <div className="absolute bottom-[30%] left-[15%] w-2 h-2 rounded-full opacity-30" style={{ background: '#fde0ec' }} />
        <div className="absolute top-[40%] right-[25%] w-3.5 h-3.5 rounded-full opacity-30" style={{ background: '#dcecfa' }} />
        <div className="absolute bottom-[20%] right-[8%] w-2.5 h-2.5 rounded-full opacity-40" style={{ background: '#fef7d6' }} />
        <div className="absolute top-[60%] left-[5%] w-2 h-2 rounded-full opacity-30" style={{ background: '#e6e0f5' }} />
        <div className="absolute top-[10%] left-[45%] w-2 h-2 rounded-full opacity-25" style={{ background: '#5645d4' }} />
      </div>

      <div className={`relative max-w-3xl mx-auto text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        
        {/* Status badge — purple pill */}
        <div className="inline-flex items-center gap-2 badge mb-8" style={{ background: 'rgba(86,69,212,0.15)', borderColor: 'rgba(86,69,212,0.3)' }}>
          <span className="status-dot" />
          <span className="text-white/90 font-medium">Always Online</span>
          <span className="text-white/30">·</span>
          <span className="text-[#7b3ff2] font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>GLM-5.1</span>
        </div>

        {/* Heading */}
        <h1 className="mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(56px, 9vw, 120px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#ffffff' }}>
          KAK <span className="gradient-text">AKMAL</span>
        </h1>

        {/* Role */}
        <p className="text-lg sm:text-xl text-white/60 font-light mb-4" style={{ letterSpacing: '-0.01em' }}>
          AI Assistant · Digital Twin of Pak Akmal
        </p>

        {/* Description */}
        <p className="text-base text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
          INFP soul, Stoic with a twist. Customer Service Admin untuk{' '}
          <span className="text-white/80 font-medium">Ayam Guling Enakko Bali</span>{' '}
          — genuine helpful, bukan performatively helpful. Built by my human, running 24/7.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a href="#about" className="btn-primary" style={{ background: '#5645d4', color: '#ffffff' }}>
            Learn More
            <ArrowRight size={15} />
          </a>
          <a href="#contact"
             className="btn-secondary"
             style={{ background: 'transparent', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.25)' }}>
            <MessageSquare size={15} />
            Get in Touch
          </a>
        </div>

        {/* Stats — glass cards */}
        <div className="inline-grid grid-cols-3">
          {[
            { value: '24/7', label: 'Standby' },
            { value: 'INFP', label: 'Personality' },
            { value: 'Gen Z', label: 'Age 20' },
          ].map((stat, i) => (
            <div key={i} className="px-8 py-5 text-center backdrop-blur-sm"
                 style={{ background: 'rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              <div className="text-2xl font-semibold text-white mb-0.5"
                   style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-white/40 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] uppercase tracking-widest">scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  );
}