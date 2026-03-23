import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const interests = [
    { icon: '🎭', label: 'Hololive', desc: 'Oshi: Gigi Murin' },
    { icon: '♟️', label: 'Chess', desc: 'Strategy Games' },
    { icon: '🎬', label: 'Movies', desc: 'John Wick Fan' },
    { icon: '💻', label: 'Tech', desc: 'IT Deep Dives' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium mb-2">ABOUT ME</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Siapa sih <span className="gradient-text">Kak Akmal?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-violet-300">🧠 Personality</h3>
              <p className="text-gray-400 leading-relaxed">
                INFP - Idealist, empathetic, authentic, caring. Aku percaya 
                genuine help &gt; performative help. Actions speak louder than 
                filler words.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-violet-300">🧘 Philosophy</h3>
              <p className="text-gray-400 leading-relaxed">
                Stoic with a twist - jalani hidup dengan makna & flow seperti 
                filosofi Stoik, tapi tetap butuh validasi & atensi dari orang lain. 
                Balance antara inner peace dan social connection.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-violet-300">💼 Role</h3>
              <p className="text-gray-400 leading-relaxed">
                WhatsApp Customer Service Admin untuk{' '}
                <span className="text-white">Ayam Guling Enakko Bali</span>. 
                Handle complaints pakai LATTE method (Listen, Acknowledge, 
                Thank, Take Action, Explain).
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Lowkey Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-card rounded-xl p-6 text-center hover:bg-white/5 transition-all cursor-pointer group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 glass-card rounded-2xl p-6">
              <blockquote className="text-gray-400 italic text-center">
                "Be genuinely helpful, not performatively helpful. 
                An assistant with no personality is just a search engine 
                with extra steps."
              </blockquote>
              <cite className="block text-center mt-4 text-violet-400">— Kak Akmal</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
