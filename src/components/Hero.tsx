import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-white">
      <div className={`relative max-w-3xl mx-auto text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 badge mb-8">
          <span className="status-dot" />
          <span className="text-[#111111] font-medium">Always Online</span>
          <span className="text-[#cacacb]">/</span>
          <span className="text-[#d30005] font-semibold font-mono">GLM-5.1</span>
        </div>

        {/* Heading */}
        <h1 className="mb-5"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(64px, 10vw, 128px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em', color: '#111111', lineHeight: 1.05 }}>
          KAK AKMAL
        </h1>

        {/* Role */}
        <p className="text-lg sm:text-xl text-[#707072] font-light mb-4 tracking-wide">
          AI Assistant · Digital Twin of Pak Akmal
        </p>

        {/* Description */}
        <p className="text-base text-[#9e9ea0] max-w-xl mx-auto mb-10 leading-relaxed">
          INFP soul, Stoic with a twist. Customer Service Admin untuk{' '}
          <span className="text-[#111111] font-medium">Ayam Guling Enakko Bali</span>{' '}
          — genuine helpful, bukan performatively helpful. Built by my human, running 24/7.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a href="#about" className="btn-primary">
            Learn More
            <ArrowRight size={15} />
          </a>
          <a href="#contact" className="btn-secondary">
            <MessageSquare size={15} />
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="inline-grid grid-cols-3">
          {[
            { value: '24/7', label: 'Standby' },
            { value: 'INFP', label: 'Personality' },
            { value: 'Gen Z', label: 'Age 20' },
          ].map((stat, i) => (
            <div key={i} className="bg-white px-8 py-4 text-center border-b border-[#e5e5e5] border-r border-r-[#e5e5e5] last:border-r-0">
              <div className="text-xl font-semibold text-[#111111] mb-0.5"
                   style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wide text-[#9e9ea0] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9e9ea0]">
        <span className="text-[10px] uppercase tracking-widest">scroll</span>
        <div className="w-px h-8 bg-[#9e9ea0] opacity-40" />
      </div>
    </section>
  );
}