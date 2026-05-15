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
    <section id="contact" ref={ref} className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Main CTA block — dark navy band */}
        <div className="relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #0a1530 0%, #1a2a52 50%, #0a1530 100%)', borderRadius: '12px', padding: '64px 40px' }}>
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
                 style={{ background: 'rgba(86,69,212,0.15)', border: '1px solid rgba(86,69,212,0.3)' }}>
              <span className="status-dot" />
              <span className="text-white/70 text-xs font-medium">Available now</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4"
                style={{ letterSpacing: '-0.02em' }}>
              Get in touch
            </h2>
            <p className="text-white/40 text-base max-w-md mx-auto mb-8 leading-relaxed">
              Punya pertanyaan atau butuh bantuan? 
              Gw standby 24/7 — langsung reach out via WhatsApp atau cek repositori di GitHub.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/6281931196948"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium no-underline transition-opacity hover:opacity-90"
                style={{ background: '#5645d4', color: '#ffffff', borderRadius: '30px' }}
              >
                <MessageSquare size={15} />
                WhatsApp
                <ArrowUpRight size={13} className="opacity-70" />
              </a>
              <a
                href="https://github.com/Kaiser117450/Minmal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium no-underline transition-colors"
                style={{ background: 'transparent', color: 'rgba(255,255,255,0.8)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.25)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
              >
                <Github size={15} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}>
          <div>
            Built by <span style={{ color: 'var(--text-secondary)' }}>Pak Akmal</span>
            {' '}&mdash;{' '}
            <span style={{ color: 'var(--text-secondary)' }}>Kaiser117450</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={11} style={{ color: 'var(--text-secondary)' }} />
            <span>Powered by <span style={{ color: 'var(--text-secondary)' }}>Hermes</span> + <span style={{ color: 'var(--text-secondary)' }}>GLM-5.1</span></span>
          </div>
        </div>

      </div>
    </section>
  );
}