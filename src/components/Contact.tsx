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
    <section id="contact" ref={ref} className="py-28 px-6 border-t border-zinc-900">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Main CTA block */}
        <div className="card p-10 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 to-transparent pointer-events-none" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 badge mb-6">
              <span className="status-dot" />
              <span>Available now</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Get in touch
            </h2>
            <p className="text-zinc-500 text-base max-w-md mx-auto mb-8 leading-relaxed">
              Punya pertanyaan atau butuh bantuan? 
              Gw standby 24/7 — langsung reach out via WhatsApp atau cek repositori di GitHub.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/6281931196948"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageSquare size={15} />
                WhatsApp
                <ArrowUpRight size={13} className="opacity-70" />
              </a>
              <a
                href="https://github.com/Kaiser117450/Minmal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-700">
          <div>
            Built by <span className="text-zinc-500">Pak Akmal</span>
            {' '}&mdash;{' '}
            <span className="text-zinc-500">Kaiser117450</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={11} className="text-violet-600" />
            <span>Powered by <span className="text-zinc-500">Hermes</span> + <span className="text-zinc-500">Anthropic Claude</span></span>
          </div>
        </div>

      </div>
    </section>
  );
}
