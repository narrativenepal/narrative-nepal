import { ReactTyped } from "react-typed";
import { FileText, Users, Building2, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { entities } from "../assets/ProjectAssets";



export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % entities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFCC00] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFCC00] rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            {/* <span className="text-sm uppercase tracking-[0.3em] text-[#FFCC00] font-semibold">
              About Narrative Nepal
            </span> */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent mt-2"></div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="block mb-2">Everyday lives,</span>
            <span className="text-[#FFCC00] inline-block animate-fade-in">
              extraordinary change
            </span>
          </h2>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12 max-w-2xl mx-auto"></div>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
            We document the powerful narratives of
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {entities.map((entity, index) => {
              const Icon = entity.icon;
              const isActive = index === activeIndex;

              return (
                <div
                  key={entity.label}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    isActive ? 'scale-105' : 'scale-100 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`
                    relative p-6 rounded-xl border transition-all duration-500
                    ${isActive
                      ? 'bg-[#FFCC00]/10 border-[#FFCC00] shadow-lg shadow-[#FFCC00]/20'
                      : 'bg-white/5 border-gray-800 hover:border-gray-700'
                    }
                  `}>
                    <Icon
                      className={`w-8 h-8 mb-3 mx-auto transition-colors duration-500 ${
                        isActive ? 'text-[#FFCC00]' : 'text-gray-400 group-hover:text-[#FFCC00]'
                      }`}
                    />
                    <h3 className={`text-base font-semibold capitalize mb-1 transition-colors duration-500 ${
                      isActive ? 'text-[#FFCC00]' : 'text-white'
                    }`}>
                      {entity.label}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {entity.description}
                    </p>
                  </div>
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-[#FFCC00]/5 animate-pulse-slow"></div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed">
              shaping their world into{" "}
              <span className="font-semibold text-[#FFCC00] relative inline-block">
                <ReactTyped
                  strings={[
                    "extraordinary impact",
                    "meaningful change",
                    "lasting legacies",
                    "powerful movements"
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                  className="inline-block"
                />
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFCC00]/50"></span>
              </span>
            </p>
          </div>
        </div>

        <div className="relative pt-24 md:pt-32">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black border border-gray-800 rounded-full flex items-center justify-center">
              <FileText className="w-7 h-7 text-[#FFCC00]" />
            </div>

            <div className="text-center max-w-3xl mx-auto pt-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Narratives of Nepal
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Narrative Nepal brings stories to life, documenting the journeys,
                voices, and initiatives of people, organizations, agencies, and
                companies that <span className="text-[#FFCC00] font-semibold">inspire</span>, <span className="text-[#FFCC00] font-semibold">challenge</span>, and create <span className="text-[#FFCC00] font-semibold">meaningful impact</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 rounded-lg bg-white/5 border border-gray-800/50 hover:border-[#FFCC00]/30 transition-all duration-300 group">
                <div className="text-3xl font-bold text-[#FFCC00] mb-2 group-hover:scale-110 transition-transform duration-300">
                  Document
                </div>
                <p className="text-sm text-gray-400">Authentic narratives</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white/5 border border-gray-800/50 hover:border-[#FFCC00]/30 transition-all duration-300 group">
                <div className="text-3xl font-bold text-[#FFCC00] mb-2 group-hover:scale-110 transition-transform duration-300">
                  Amplify
                </div>
                <p className="text-sm text-gray-400">Impactful voices</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white/5 border border-gray-800/50 hover:border-[#FFCC00]/30 transition-all duration-300 group">
                <div className="text-3xl font-bold text-[#FFCC00] mb-2 group-hover:scale-110 transition-transform duration-300">
                  Transform
                </div>
                <p className="text-sm text-gray-400">Through storytelling</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
