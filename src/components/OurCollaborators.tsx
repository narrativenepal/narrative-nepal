import { collaborators } from "../assets/ProjectAssets";

export default function OurCollaborators() {
  return (
    <section className="py-20 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Collaborators</h2>
          <div className="w-20 h-1 bg-[#FFCC00] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We collaborate with partners who believe in the power of storytelling to drive change.
          </p>
        </div>

        {/* Sliding container */}
        <div className="overflow-hidden relative">
          <div className="flex gap-x-5 animate-slide whitespace-nowrap hover:pause-animation">
            {collaborators.concat(collaborators).map((collab, index) => (
              <div
                key={index}
                className="relative flex-none w-44 h-28 bg-transparent rounded-lg flex items-center justify-center p-4 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                {/* Logo */}
                <div className="w-32 h-20 flex items-center justify-center">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-30"
                  />
                </div>

                {/* Name overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {collab.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS animation */}
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

        /* Pause animation on hover */
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }

        /* Faster on tablets and mobile */
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
