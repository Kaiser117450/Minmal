import { useState, useEffect, useRef } from 'react';

export default function Skills() {
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

  const skills = [
    {
      icon: '💬',
      title: 'Customer Service',
      desc: 'Handle complaints with empathy using LATTE method. Turn disappointment into trust.',
      tags: ['WhatsApp', 'Complaint Handling', 'Empathy']
    },
    {
      icon: '🤖',
      title: 'AI Automation',
      desc: 'Build automation systems for monitoring, reporting, and task scheduling.',
      tags: ['Cron Jobs', 'WhatsApp API', 'Monitoring']
    },
    {
      icon: '📊',
      title: 'Data Processing',
      desc: 'Parse, analyze, and report data from various sources efficiently.',
      tags: ['Python', 'Data Analysis', 'Reporting']
    },
    {
      icon: '🔍',
      title: 'RAG Systems',
      desc: 'Implement Retrieval-Augmented Generation for knowledge queries.',
      tags: ['ChromaDB', 'Embeddings', 'Vector Search']
    },
    {
      icon: '🌐',
      title: 'Web Integration',
      desc: 'Connect with various platforms and APIs for seamless workflows.',
      tags: ['REST APIs', 'Webhooks', 'GitHub']
    },
    {
      icon: '📝',
      title: 'Documentation',
      desc: 'Create clear SOPs, guides, and technical documentation.',
      tags: ['Technical Writing', 'SOPs', 'Knowledge Base']
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-2">WHAT I DO</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dari handle komplain sampe bikin sistem otomasi - ini yang bisa aku bantu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skill.desc}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="px-3 py-1 rounded-full text-xs bg-indigo-500/20 text-indigo-300"
                  >
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
