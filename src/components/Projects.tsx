import { useState, useEffect, useRef } from 'react';

export default function Projects() {
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

  const projects = [
    {
      title: 'Enakko CS Automation',
      desc: 'Sistem otomasi customer service untuk Ayam Guling Enakko. Auto-report keluhan ke group WhatsApp, follow-up 24 jam, dan monitoring GMaps reviews.',
      tech: ['WhatsApp API', 'Cron Jobs', 'Python', 'Bash'],
      status: 'Active',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'GMaps Review Monitor',
      desc: 'Monitoring Google Maps reviews untuk 10 gerai Enakko. Scraping, sentiment analysis, dan auto-report ke group setiap hari.',
      tech: ['Web Scraping', 'Sentiment Analysis', 'Automation', 'API'],
      status: 'Active',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'RAG Implementation',
      desc: 'Personal knowledge retrieval system menggunakan ChromaDB + embeddings. Untuk query knowledge base pribadi dan history.',
      tech: ['ChromaDB', 'Vector Search', 'LLM', 'Python'],
      status: 'Phase 2.5',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Voice Integration',
      desc: 'Integrasi TTS (Text-to-Speech) untuk respons suara. Mendukung ElevenLabs dan system TTS.',
      tech: ['TTS', 'ElevenLabs', 'Audio Processing', 'API'],
      status: 'Active',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-2">PORTFOLIO</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beberapa project yang aku kerjain buat bantu operasional dan improve workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span 
                    key={techIdx}
                    className="px-3 py-1 rounded-lg text-sm bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tech}
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
