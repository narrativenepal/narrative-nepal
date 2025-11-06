import { collaborators } from "../assets/ProjectAssets";

export default function OurCollaborators() {
  return (
    <section className=" py-24 md:py-32 w-full  bg-[#0a0a0a] flex flex-col justify-center overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          The Collaborations
        </h2>
        <div className="w-20 h-1 bg-[#FFCC00] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Together, we tell stories not for people, but with them.
        Every collaboration is a shared vision of change, curiosity, and compassion.
        </p>
      </div>

      {/* Full-width sliding container */}
      <div className="overflow-hidden relative w-full">
        <div className="flex gap-x-8 animate-slide whitespace-nowrap hover:pause-animation">
          {collaborators.concat(collaborators).map((collab, index) => (
            <div
              key={index}
              className="relative flex-none w-44 h-28 bg-transparent rounded-lg flex items-center justify-center p-4 overflow-hidden transition-transform duration-300 cursor-pointer group hover:scale-105"
            >
              <div className="w-32 h-20 relative flex items-center justify-center">
                {/* Grayscale logo */}
                <img
                  src={collab.logo}
                  alt={collab.name}
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Colorized logo */}
                <img
                  src={collab.colorLogo}
                  alt={`${collab.name} colorized`}
                  className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          display: flex;
          animation: slide 20s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }

        @media (max-width: 1024px) {
          .animate-slide {
            animation-duration: 15s;
          }
        }

        @media (max-width: 640px) {
          .animate-slide {
            animation-duration: 10s;
          }
        }
      `}</style>
    </section>
  );
}
