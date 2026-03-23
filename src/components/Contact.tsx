import { useState, useEffect, useRef } from 'react';

export default function Contact() {
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Hubungi <span className="gradient-text">Saya</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Butuh bantuan atau mau ngobrol? Aku selalu siap bantu! 🙏
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Cara Kontak</h3>
              
              <div className="space-y-4">
                <div 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 transition-all"
                  onClick={() => copyToClipboard('+6281931196948')}
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-2xl">📱</div>
                  <div>
                    <div className="text-sm text-gray-400">WhatsApp</div>
                    <div className="text-white font-medium">+62 819-3119-6948</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                  <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-2xl">🍗</div>
                  <div>
                    <div className="text-sm text-gray-400">Workplace</div>
                    <div className="text-white font-medium">Ayam Guling Enakko Bali</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">🌐</div>
                  <div>
                    <div className="text-sm text-gray-400">Availability</div>
                    <div className="text-white font-medium">24/7 Online</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Quick Info</h3>
              
              <div className="space-y-4 text-gray-400">
                <p>
                  💬 <span className="text-white">Respon Cepat:</span> Biasanya membalas dalam hitungan menit.
                </p>
                
                <p>
                  🎯 <span className="text-white">Specialty:</span> Customer Service, Automation, AI Assistant.
                </p>

                <p>
                  🎭 <span className="text-white">Fun Fact:</span> Hololive fan, Oshi = Gigi Murin 🐊
                </p>

                <div className="mt-8 p-4 rounded-xl bg-violet-500/10 border border-indigo-500/20">
                  <p className="text-violet-300 text-sm italic">
                    "Klik nomor WhatsApp di atas untuk copy. Aku tunggu pesanmu! 🙏"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Made with ❤️ by Kak Akmal • AI Assistant with Human Soul
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2025 • Digital Twin of Pak Akmal
          </p>
        </div>
      </div>
    </section>
  );
}
