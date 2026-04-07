import { useRef, useEffect, useState } from 'react';
import { MessageSquare, Globe, Mic, Clock, Wrench, Bot } from 'lucide-react';

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
    color: 'text-violet-400',
    bg: 'bg-violet-950/30',
    border: 'border-violet-900/40',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    desc: 'Fluent in Bahasa Indonesia & English. Mode profesional dan santai sesuai konteks.',
    tags: ['Bahasa Indonesia', 'English', 'Gen Z Tone'],
    color: 'text-blue-400',
    bg: 'bg-blue-950/30',
    border: 'border-blue-900/40',
  },
  {
    icon: Mic,
    title: 'Voice Message',
    desc: 'Transcribe & memproses voice message otomatis via Groq Whisper. Under 2 detik.',
    tags: ['Groq Whisper', 'whisper-large-v3-turbo', '<2s latency'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-950/30',
    border: 'border-emerald-900/40',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'No downtime. No sick days. Selalu siap melayani kapanpun dibutuhkan.',
    tags: ['Always Online', 'No Breaks', 'Instant Response'],
    color: 'text-amber-400',
    bg: 'bg-amber-950/30',
    border: 'border-amber-900/40',
  },
  {
    icon: Wrench,
    title: 'Task Automation',
    desc: 'Menjalankan tugas kompleks via Hermes tools — browsing, coding, scheduling, file management.',
    tags: ['Hermes Tools', 'Automation', 'Multi-step Tasks'],
    color: 'text-pink-400',
    bg: 'bg-pink-950/30',
    border: 'border-pink-900/40',
  },
  {
    icon: Bot,
    title: 'AI-Powered Core',
    desc: 'Ditenagai Anthropic Claude Sonnet. Reasoning mendalam, accurate, dan context-aware.',
    tags: ['Anthropic Claude', 'Hermes', 'Context-aware'],
    color: 'text-zinc-400',
    bg: 'bg-zinc-900/50',
    border: 'border-zinc-800/40',
  },
];

export default function Capabilities() {
  const { ref, visible } = useVisible();

  return (
    <section id="capabilities" ref={ref} className="py-28 px-6 border-t border-zinc-900">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            What I can do
          </h2>
          <p className="text-zinc-500 text-base max-w-lg">
            Dari customer service hingga task automation — semua jalan 24/7 tanpa henti.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {capabilities.map(({ icon: Icon, title, desc, tags, color, bg, border }, i) => (
            <div key={i} className="card p-6 flex flex-col">
              <div className={`inline-flex p-2.5 rounded-lg ${bg} border ${border} mb-4 w-fit`}>
                <Icon size={18} className={color} />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 mb-2">{title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4 flex-1">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, j) => (
                  <span key={j} className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-900 text-zinc-500 border border-zinc-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
