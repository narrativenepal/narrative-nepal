export default function NarrativeArchive() {
    return (
      <section className="py-20 bg-zinc-950" id="archive">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Narrative Archive</h2>
            <div className="w-20 h-1 bg-[#FFCC00] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Every film leaves behind a trail of questions, connections, and discoveries. Through the Narrative Archive, we share reflections, field diaries, behind-the-scenes experiences, and creative essays from our documentary journey.
            </p>
          </div>
  
          {/* Animated Centered Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl rounded-lg overflow-hidden group">
              <img
                src="https://res.cloudinary.com/dypqxeikm/image/upload/v1761908732/Untitled_design_11_xxnykb.png" 
                alt="Narrative Archive"
                className="w-full h-auto object-cover object-center transition-transform duration-700 ease-in-out transform group-hover:scale-105 animate-float"
              />
            </div>
          </div>
        </div>
  
        {/* Tailwind CSS Animation */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
  
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
  
          @media (max-width: 1024px) {
            .animate-float {
              animation: float 4s ease-in-out infinite;
            }
          }
  
          @media (max-width: 640px) {
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
          }
        `}</style>
      </section>
    );
  }
  