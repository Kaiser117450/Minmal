import { useRef, useEffect, useState } from 'react';
import { MessageSquare, Globe, Mic, Clock, Wrench, Sparkles } from 'lucide-react';

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

const capabilities = [
  {
    icon: MessageSquare,
    title: 'Customer Service',
    desc: 'Handle complaints & inquiries dengan LATTE method. Listen, Acknowledge, Thank, Take Action, Explain.',
    tags: ['LATTE Method', 'Empathy', 'Conflict Resolution'],
    variant: 'dark',
    iconColor: '#c2ef4e',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    desc: 'Fluent in Bahasa Indonesia & English. Mode profesional dan santai sesuai konteks.',
    tags: ['Bahasa Indonesia', 'English', 'Gen Z Tone'],
    variant: 'spotlight',
    iconColor: '#ffffff',
  },
  {
    icon: Mic,
    title: 'Voice Message',
    desc: 'Transcribe & memproses voice message otomatis via Groq Whisper. Under 2 detik.',
    tags: ['Groq Whisper', 'whisper-large-v3-turbo', '<2s latency'],
    variant: 'dark',
    iconColor: '#6a5fc1',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'No downtime. No sick days. Selalu siap melayani kapanpun dibutuhkan.',
    tags: ['Always Online', 'No Breaks', 'Instant Response'],
    variant: 'spotlight',
    iconColor: '#ffffff',
  },
  {
    icon: Wrench,
    title: 'Task Automation',
    desc: 'Menjalankan tugas kompleks via Hermes tools — browsing, coding, scheduling, file management.',
    tags: ['Hermes Tools', 'Automation', 'Multi-step Tasks'],
    variant: 'dark',
    iconColor: '#fa7faa',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Core',
    desc: 'Ditenagai GLM-5.1 via OpenCode. Reasoning mendalam, genuine, dan context-aware.',
    tags: ['GLM-5.1', 'OpenCode', 'Context-aware'],
    variant: 'spotlight',
    iconColor: '#c2ef4e',
  },
];

export default function Capabilities() {
  const { ref, visible } = useVisible();

  return (
    <section id="capabilities" ref={ref} className="py-12 md:py-24 px-6" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="mb-12">
          {/* eyebrow: 15px/500, uppercase, 0.2px tracking */}
          <p className="mb-3" style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.4, letterSpacing: '0.2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Capabilities</p>
          {/* display-large: 60px/500/1.1/0 */}
          <h2 className="mb-4" style={{ fontFamily: "'Space Grotesk', 'Rubik', sans-serif", fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: 0, color: '#ffffff' }}>
            What I can do
          </h2>
          {/* body-lg: 16px/400/2.0 */}
          <p className="max-w-lg" style={{ fontSize: '16px', fontWeight: 400, lineHeight: 2.0, letterSpacing: 0, color: 'var(--text-secondary)' }}>
            Dari customer service hingga task automation — semua jalan 24/7 tanpa henti.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map(({ icon: Icon, title, desc, tags, variant, iconColor }, i) => {
            const isSpotlight = variant === 'spotlight';
            return (
              <div key={i} 
                   style={{ 
                     background: isSpotlight ? '#422082' : '#1f1633',
                     borderRadius: '18px',
                     padding: '32px',
                     color: '#ffffff',
                     border: isSpotlight ? 'none' : '1px solid var(--border)',
                     display: 'flex',
                     flexDirection: 'column'
                   }}>
                <div className="inline-flex p-2.5 mb-4 w-fit"
                     style={{ background: isSpotlight ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)', borderRadius: '8px', border: isSpotlight ? '1px solid rgba(255,255,255,0.15)' : '1px solid var(--border)' }}>
                  <Icon size={18} style={{ color: iconColor }} />
                </div>
                {/* heading-sm: 20px/600/1.25 */}
                <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.25, letterSpacing: 0, color: '#ffffff' }}>{title}</h3>
                {/* body-md: 16px/500/1.5 */}
                <p className="mb-4 flex-1" style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1.5, letterSpacing: 0, color: 'var(--text-secondary)' }}>{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, j) => (
                    <span key={j} 
                          style={{ borderRadius: '12px', background: '#79628c', color: '#ffffff', padding: '8px 16px', fontSize: '14px', fontWeight: 500, lineHeight: 1.29, letterSpacing: '0.2px', textTransform: 'uppercase' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
