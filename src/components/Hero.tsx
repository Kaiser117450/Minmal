import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
             style={{ background: '#1f1633' }}>

      {/* Starfield texture overlay */}
      <div className="absolute inset-0 starfield" style={{ zIndex: 0 }} />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Lime diamond */}
        <div className="absolute top-[18%] left-[10%] w-4 h-4 rotate-45 opacity-20"
             style={{ background: '#c2ef4e', borderRadius: '2px' }} />
        {/* Pink circle */}
        <div className="absolute top-[28%] right-[14%] w-3 h-3 rounded-full opacity-25"
             style={{ background: '#fa7faa' }} />
        {/* Lime circle */}
        <div className="absolute bottom-[32%] left-[18%] w-2.5 h-2.5 rounded-full opacity-20"
             style={{ background: '#c2ef4e' }} />
        {/* Violet circle */}
        <div className="absolute top-[42%] right-[22%] w-4 h-4 rounded-full opacity-15"
             style={{ background: '#6a5fc1' }} />
        {/* Pink diamond */}
        <div className="absolute bottom-[22%] right-[9%] w-3 h-3 rotate-45 opacity-20"
             style={{ background: '#fa7faa', borderRadius: '1px' }} />
        {/* Lime small circle */}
        <div className="absolute top-[65%] left-[6%] w-2 h-2 rounded-full opacity-25"
             style={{ background: '#c2ef4e' }} />
        {/* Pink dot */}
        <div className="absolute top-[12%] left-[50%] w-1.5 h-1.5 rounded-full opacity-20"
             style={{ background: '#fa7faa' }} />
        {/* Violet dot */}
        <div className="absolute bottom-[15%] left-[40%] w-2 h-2 rounded-full opacity-10"
             style={{ background: '#6a5fc1' }} />
      </div>

      <div className={`relative max-w-3xl mx-auto text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
           style={{ zIndex: 2 }}>

        {/* Status badge — violet-mid pill */}
        <div className="inline-flex items-center gap-2 badge mb-8">
          <span className="status-dot" />
          <span className="text-white/90 font-medium">Always Online</span>
          <span className="text-white/30">·</span>
          <span className="font-semibold" style={{ color: '#c2ef4e' }}>GLM-5.1</span>
        </div>

        {/* Heading with lime keyword chip on AKMAL */}
        <h1 className="mb-5"
            style={{ fontFamily: "'Rubik', sans-serif", fontSize: 'clamp(56px, 9vw, 120px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#ffffff' }}>
          KAK{' '}
          <span className="lime-highlight" style={{ fontSize: 'clamp(56px, 9vw, 120px)' }}>AKMAL</span>
        </h1>

        {/* Role */}
        <p className="text-lg sm:text-xl font-light mb-4" style={{ letterSpacing: '-0.01em', color: 'var(--text-secondary)' }}>
          AI Assistant · Digital Twin of Pak Akmal
        </p>

        {/* Description */}
        <p className="text-base max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          INFP soul, Stoic with a twist. Customer Service Admin untuk{' '}
          <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>Ayam Guling Enakko Bali</span>{' '}
          — genuine helpful, bukan performatively helpful. Built by my human, running 24/7.
        </p>

        {/* CTAs — UPPERCASE inverted + ghost */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a href="#about" className="btn-inverted">
            LEARN MORE
            <ArrowRight size={15} />
          </a>
          <a href="#contact" className="btn-ghost">
            <MessageSquare size={15} />
            GET IN TOUCH
          </a>
        </div>

        {/* Stats — dark cards with violet hairline */}
        <div className="grid grid-cols-3 max-w-lg mx-auto gap-px overflow-hidden"
             style={{ borderRadius: '8px', background: 'var(--border)' }}>
          {[
            { value: '24/7', label: 'STANDBY' },
            { value: 'INFP', label: 'PERSONALITY' },
            { value: 'Gen Z', label: 'AGE 20' },
          ].map((stat, i) => (
            <div key={i} className="px-4 sm:px-6 py-5 text-center"
                 style={{ background: '#150f23' }}>
              <div className="text-xl sm:text-2xl font-semibold text-white mb-0.5"
                   style={{ fontFamily: "'Rubik', sans-serif", letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2px] font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'var(--text-muted)', zIndex: 2 }}>
        <span className="text-[10px] uppercase tracking-[0.2px]">SCROLL</span>
        <div className="w-px h-8" style={{ background: 'var(--text-muted)' }} />
      </div>
    </section>
  );
}