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
    <section id="capabilities" ref={ref} className="py-28 px-6 border-t border-[#e5e5e5]">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#9e9ea0] font-medium mb-3">Capabilities</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#111111] mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}>
            What I can do
          </h2>
          <p className="text-[#707072] text-base max-w-lg">
            Dari customer service hingga task automation — semua jalan 24/7 tanpa henti.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {capabilities.map(({ icon: Icon, title, desc, tags }, i) => (
            <div key={i} className="card p-6 flex flex-col">
              <div className="inline-flex p-2.5 bg-white border border-[#cacacb] mb-4 w-fit"
                   style={{ borderRadius: '0px' }}>
                <Icon size={18} className="text-[#111111]" />
              </div>
              <h3 className="text-sm font-semibold text-[#111111] mb-2">{title}</h3>
              <p className="text-xs text-[#707072] leading-relaxed mb-4 flex-1">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 text-xs font-mono bg-white text-[#707072] border border-[#cacacb]"
                        style={{ borderRadius: '30px' }}>
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