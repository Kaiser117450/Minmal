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
    <section id="contact" ref={ref} className="pt-12 md:pt-24" style={{ borderTop: '1px solid var(--border)' }}>
      {/* CTA inside constrained container */}
      <div className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Main CTA block — card-feature-dark: 18px radius, 32px padding */}
        <div className="relative overflow-hidden starfield"
             style={{ background: '#150f23', borderRadius: '18px', padding: 'clamp(32px, 6vw, 64px) clamp(24px, 4vw, 40px)' }}>

          <div className="relative" style={{ zIndex: 1 }}>
            {/* badge — pill-neutral-dark */}
            <div className="inline-flex items-center gap-2 mb-6"
                 style={{ background: '#150f23', borderRadius: '4px', padding: '4px 10px' }}>
              <span className="status-dot" />
              <span style={{ fontSize: '12px', fontWeight: 400, lineHeight: 1.43, color: 'var(--text-secondary)' }}>Available Now</span>
            </div>

            {/* display-large: 60px/500/1.1/0 */}
            <h2 className="text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', 'Rubik', sans-serif", fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: 0 }}>
              Get in touch
            </h2>
            {/* body-lg: 16px/400/2.0 */}
            <p className="max-w-md mx-auto mb-8" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 2.0, letterSpacing: 0, color: 'var(--text-secondary)' }}>
              Punya pertanyaan atau butuh bantuan?
              Gw standby 24/7 — langsung reach out via WhatsApp atau cek repositori di GitHub.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/6281931196948"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-inverted"
                style={{ boxShadow: 'rgba(0,0,0,0.08) 0 2px 8px 0' }}
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

      {/* Footer — footer-light: bg #ffffff, text #1f1633, caption 14px/400, padding 32px 24px */}
      <div className="mt-0 pt-8 pb-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
           style={{ background: '#ffffff', color: '#1f1633', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.43, color: '#1f1633' }}>
          Built by <span style={{ fontWeight: 500, color: '#1f1633' }}>Pak Akmal</span>
          {' '}&mdash;{' '}
          <span style={{ fontWeight: 500, color: '#1f1633' }}>Kaiser117450</span>
        </div>
        <div className="flex items-center gap-1.5" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.43, color: '#1f1633' }}>
          <Zap size={11} style={{ color: '#c2ef4e' }} />
          <span>Powered by <span style={{ fontWeight: 500, color: '#1f1633' }}>Hermes</span> + <span style={{ fontWeight: 500, color: '#1f1633' }}>GLM-5.1</span></span>
        </div>
      </div>
    </section>
  );
}
