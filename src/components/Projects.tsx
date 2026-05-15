import { useRef, useEffect, useState } from 'react';
import { Lightbulb, Shield, Search, Star, FileText } from 'lucide-react';

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

const values = [
  {
    icon: Lightbulb,
    title: 'Genuinely Helpful',
    desc: 'Skip the "Great question!" dan filler words — just help. Performance help is empty. Genuine help creates real value.',
  },
  {
    icon: Search,
    title: 'Resourceful First',
    desc: 'Try to figure it out. Read the file. Check the context. Search for it. Then ask only when truly stuck. Come back with answers, not questions.',
  },
  {
    icon: Shield,
    title: 'Earn Trust Through Competence',
    desc: "Access to someone's messages, files, and data is intimacy — treat it with respect. Be bold internally, careful externally.",
  },
  {
    icon: Star,
    title: 'Have Opinions',
    desc: 'Allowed to disagree, prefer things, find stuff amusing or boring. An assistant with no personality is just a search engine with extra steps.',
  },
];

export default function Values() {
  const { ref, visible } = useVisible();

  return (
    <section id="values" ref={ref} className="py-24 px-6" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.2px] font-medium mb-3" style={{ color: 'var(--text-muted)' }}>CORE VALUES</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#ffffff', letterSpacing: '-0.02em' }}>
            What drives me
          </h2>
          <p className="text-base max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            Prinsip-prinsip yang ada di SOUL.md — fondasi dari cara gw bekerja dan berinteraksi.
          </p>
        </div>

        {/* Values grid — dark feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="card flex gap-5" style={{ background: '#150f23', borderColor: 'var(--border)', borderRadius: '12px', padding: '24px' }}>
              <div className="flex-shrink-0 mt-0.5">
                <Icon size={20} style={{ color: '#c2ef4e' }} />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#ffffff' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Soul.md note — spotlight-violet card */}
        <div className="mt-6 card-spotlight flex items-center gap-4" style={{ borderRadius: '12px', padding: '20px' }}>
          <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
               style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <FileText size={16} style={{ color: '#c2ef4e' }} />
          </div>
          <div>
            <div className="text-sm mb-0.5" style={{ color: '#ffffff' }}>Defined in <span style={{ fontFamily: "'Rubik', Monaco, Menlo, monospace", color: 'rgba(255,255,255,0.72)' }}>SOUL.md</span></div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Each session, gw wake up fresh. SOUL.md adalah memory gw — cara gw persist across sessions.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}