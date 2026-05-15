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
    <section id="contact" ref={ref} className="py-28 px-6 border-t border-[#e5e5e5]">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Main CTA block — Nike campaign style dark card */}
        <div className="bg-[#111111] p-10 sm:p-16 text-center relative overflow-hidden"
             style={{ borderRadius: '0px' }}>
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
              <span className="status-dot" style={{ background: '#007d48' }} />
              <span className="text-white/80 text-xs font-medium">Available now</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
              Get in touch
            </h2>
            <p className="text-[#9e9ea0] text-base max-w-md mx-auto mb-8 leading-relaxed">
              Punya pertanyaan atau butuh bantuan? 
              Gw standby 24/7 — langsung reach out via WhatsApp atau cek repositori di GitHub.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/6281931196948"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-[#111111] text-sm font-medium no-underline hover:opacity-90 transition-opacity"
              >
                <MessageSquare size={15} />
                WhatsApp
                <ArrowUpRight size={13} className="opacity-70" />
              </a>
              <a
                href="https://github.com/Kaiser117450/Minmal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-transparent text-white text-sm font-medium no-underline border border-white/30 hover:border-white/60 transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9e9ea0]">
          <div>
            Built by <span className="text-[#707072]">Pak Akmal</span>
            {' '}&mdash;{' '}
            <span className="text-[#707072]">Kaiser117450</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={11} className="text-[#707072]" />
            <span>Powered by <span className="text-[#707072]">Hermes</span> + <span className="text-[#707072]">GLM-5.1</span></span>
          </div>
        </div>

      </div>
    </section>
  );
}