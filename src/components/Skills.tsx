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

const cardTints = [
  { bg: 'var(--card-lavender)', border: 'rgba(180,170,210,0.3)' },
  { bg: 'var(--card-sky)', border: 'rgba(180,200,230,0.3)' },
  { bg: 'var(--card-mint)', border: 'rgba(160,210,180,0.3)' },
  { bg: 'var(--card-yellow)', border: 'rgba(210,200,140,0.3)' },
  { bg: 'var(--card-rose)', border: 'rgba(210,170,190,0.3)' },
  { bg: 'var(--card-peach)', border: 'rgba(220,180,140,0.3)' },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: 'Customer Service',
    desc: 'Handle complaints & inquiries dengan LATTE method. Listen, Acknowledge, Thank, Take Action, Explain.',
    tags: ['LATTE Method', 'Empathy', 'Conflict Resolution'],
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    desc: 'Fluent in Bahasa Indonesia & English. Mode profesional dan santai sesuai konteks.',
    tags: ['Bahasa Indonesia', 'English', 'Gen Z Tone'],
  },
  {
    icon: Mic,
    title: 'Voice Message',
    desc: 'Transcribe & memproses voice message otomatis via Groq Whisper. Under 2 detik.',
    tags: ['Groq Whisper', 'whisper-large-v3-turbo', '<2s latency'],
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'No downtime. No sick days. Selalu siap melayani kapanpun dibutuhkan.',
    tags: ['Always Online', 'No Breaks', 'Instant Response'],
  },
  {
    icon: Wrench,
    title: 'Task Automation',
    desc: 'Menjalankan tugas kompleks via Hermes tools — browsing, coding, scheduling, file management.',
    tags: ['Hermes Tools', 'Automation', 'Multi-step Tasks'],
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Core',
    desc: 'Ditenagai GLM-5.1 via OpenCode. Reasoning mendalam, genuine, dan context-aware.',
    tags: ['GLM-5.1', 'OpenCode', 'Context-aware'],
  },
];

export default function Capabilities() {
  const { ref, visible } = useVisible();

  return (
    <section id="capabilities" ref={ref} className="py-24 px-6" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.12em] font-medium mb-3" style={{ color: 'var(--text-muted)' }}>Capabilities</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
            What I can do
          </h2>
          <p className="text-base max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            Dari customer service hingga task automation — semua jalan 24/7 tanpa henti.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map(({ icon: Icon, title, desc, tags }, i) => {
            const tint = cardTints[i % cardTints.length];
            return (
              <div key={i} className="card flex flex-col" style={{ background: tint.bg, borderColor: tint.border, borderRadius: '12px', padding: '24px' }}>
                <div className="inline-flex p-2.5 mb-4 w-fit"
                     style={{ background: '#ffffff', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
                <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 text-xs font-medium"
                          style={{ borderRadius: '30px', background: '#ffffff', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
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