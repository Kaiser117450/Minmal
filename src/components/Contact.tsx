import { useRef, useEffect, useState } from 'react';
import { MessageSquare, Github, ArrowUpRight, Zap } from 'lucide-react';

function useVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function Contact() {
  const { ref, visible } = useVisible();

  return (
    <section id="contact" ref={ref} className="pt-24" style={{ borderTop: '1px solid var(--border)' }}>
      {/* CTA + Divider inside constrained container */}
      <div className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Main CTA block — dark bg */}
        <div className="relative overflow-hidden starfield"
             style={{ background: '#150f23', borderRadius: '12px', padding: 'clamp(40px, 8vw, 64px) clamp(24px, 5vw, 40px)' }}>

          <div className="relative" style={{ zIndex: 1 }}>
            <div className="inline-flex items-center gap-2 badge mb-6">
              <span className="status-dot" />
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>AVAILABLE NOW</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4"
                style={{ letterSpacing: '-0.02em' }}>
              Get in touch
            </h2>
            <p className="text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Punya pertanyaan atau butuh bantuan?
              Gw standby 24/7 — langsung reach out via WhatsApp atau cek repositori di GitHub.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/6281931196948"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-inverted"
              >
                <MessageSquare size={15} />
                WHATSAPP
                <ArrowUpRight size={13} className="opacity-70" />
              </a>
              <a
                href="https://github.com/Kaiser117450/Minmal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github size={15} />
                GITHUB
              </a>
            </div>
          </div>
        </div>

        {/* Lime squiggly divider */}
        <div className="squiggly-divider mt-12" />
      </div>

      {/* Footer — full width light bg, NO negative margins */}
      <div className="mt-0 pt-8 pb-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
           style={{ background: 'var(--surface-light)', color: 'var(--ink-light)', borderTop: '1px solid var(--border-light)' }}>
        <div>
          Built by <span className="font-medium" style={{ color: 'var(--ink-light)' }}>Pak Akmal</span>
          {' '}&mdash;{' '}
          <span className="font-medium" style={{ color: 'var(--ink-light)' }}>Kaiser117450</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap size={11} style={{ color: '#c2ef4e' }} />
          <span>Powered by <span className="font-medium" style={{ color: 'var(--ink-light)' }}>Hermes</span> + <span className="font-medium" style={{ color: 'var(--ink-light)' }}>GLM-5.1</span></span>
        </div>
      </div>
    </section>
  );
}