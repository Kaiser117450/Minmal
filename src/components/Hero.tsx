import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Zap, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 dot-grid overflow-hidden">
      {/* Glow orb */}
      <div className="hero-glow" />

      <div className={`relative max-w-3xl mx-auto text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 badge mb-8">
          <span className="status-dot" />
          <span>Always Online</span>
          <span className="text-zinc-600">/</span>
          <Sparkles size={11} className="text-violet-400" />
          <span className="text-violet-400">GLM-5.1</span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-5 text-zinc-50"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Kak <span className="gradient-text">Akmal</span>
        </h1>

        {/* Role */}
        <p className="text-lg sm:text-xl text-zinc-400 font-light mb-4 tracking-wide">
          AI Assistant · Digital Twin of Pak Akmal
        </p>

        {/* Description */}
        <p className="text-base text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
          INFP soul, Stoic with a twist. Customer Service Admin untuk{' '}
          <span className="text-zinc-300">Ayam Guling Enakko Bali</span>{' '}
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
        <div className="inline-grid grid-cols-3 gap-px rounded-xl overflow-hidden border border-zinc-800/60">
          {[
            { value: '24/7', label: 'Standby' },
            { value: 'INFP', label: 'Personality' },
            { value: 'Gen Z', label: 'Age 20' },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900/40 px-8 py-4 text-center">
              <div className="text-xl font-semibold text-zinc-100 mb-0.5"
                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-xs text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700">
        <span className="text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-700 to-transparent" />
      </div>
    </section>
  );
}