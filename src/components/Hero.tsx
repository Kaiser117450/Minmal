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

        {/* Status badge — pill-neutral-dark */}
        <div className="inline-flex items-center gap-2 mb-8"
             style={{ background: '#150f23', borderRadius: '4px', padding: '4px 10px' }}>
          <span className="status-dot" />
          <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.2px', color: '#ffffff' }}>Always Online</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.25px', color: '#c2ef4e' }}>GLM-5.1</span>
        </div>

        {/* Heading — display-hero: 88px/700/1.2/0 */}
        <h1 className="mb-5"
            style={{ fontFamily: "'Space Grotesk', 'Rubik', sans-serif", fontSize: 'clamp(56px, 10vw, 88px)', fontWeight: 700, letterSpacing: '0', lineHeight: 1.2, color: '#ffffff' }}>
          KAK{' '}
          <span className="lime-highlight" style={{ fontSize: 'clamp(56px, 10vw, 88px)', fontWeight: 700 }}>AKMAL</span>
        </h1>

        {/* Role — body-strong: 16px/600/1.5 */}
        <p className="mb-4" style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.5, letterSpacing: 0, color: 'var(--text-secondary)' }}>
          AI Assistant · Digital Twin of Pak Akmal
        </p>

        {/* Description — body-lg: 16px/400/2.0 (marketing prose, airy) */}
        <p className="text-base max-w-xl mx-auto mb-10" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 2.0, letterSpacing: 0, color: 'var(--text-secondary)' }}>
          INFP soul, Stoic with a twist. Customer Service Admin untuk{' '}
          <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Ayam Guling Enakko Bali</span>{' '}
          — genuine helpful, bukan performatively helpful. Built by my human, running 24/7.
        </p>

        {/* CTAs — button-inverted + button-ghost-on-dark */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a href="#about" className="btn-inverted" style={{ boxShadow: 'rgba(0,0,0,0.08) 0 2px 8px 0' }}>
            LEARN MORE
            <ArrowRight size={15} />
          </a>
          <a href="#contact" className="btn-ghost">
            <MessageSquare size={15} />
            GET IN TOUCH
          </a>
        </div>

        {/* Stats — card-feature-dark: bg #1f1633, 18px radius, 32px padding */}
        <div className="card-feature mx-auto max-w-lg overflow-hidden"
             style={{ background: '#1f1633', borderRadius: '18px', padding: '32px' }}>
          <div className="grid grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
            {[
              { value: '24/7', label: 'Standby' },
              { value: 'INFP', label: 'Personality' },
              { value: 'Gen Z', label: 'Age 20' },
            ].map((stat, i) => (
              <div key={i} className="px-4 py-5 text-center" style={{ background: '#1f1633' }}>
                <div style={{ fontFamily: "'Space Grotesk', 'Rubik', sans-serif", fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#ffffff' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.25px', lineHeight: 1.8, textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'var(--text-secondary)', zIndex: 2 }}>
        <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.25px', lineHeight: 1.8, textTransform: 'uppercase' }}>Scroll</span>
        <div className="w-px h-8" style={{ background: 'var(--text-secondary)' }} />
      </div>
    </section>
  );
}
