import { collaborators } from "../assets/ProjectAssets";

export default function OurCollaborators() {
  // Create enough copies for seamless scrolling
  const repeatedCollaborators = [
    ...collaborators,
    ...collaborators,
    ...collaborators,
    ...collaborators,
  ];

  return (
    <section className="py-24 md:py-32 w-full bg-[#0a0a0a] flex flex-col justify-center overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          The Collaborations
        </h2>
        <div className="w-20 h-1 bg-[#FFCC00] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Together, we tell stories not for people, but with them. Every
          collaboration is a shared vision of change, curiosity, and compassion.
        </p>
      </div>

      {/* Full-width sliding container */}
      <div className="overflow-hidden relative w-full bg-white py-8 md:py-10">
        <div className="inline-flex gap-8 animate-scroll-mobile md:animate-scroll-tablet lg:animate-scroll-desktop">
          {repeatedCollaborators.map((collab, index) => (
            <div
              key={`${collab.name}-${index}`}
              className="flex-shrink-0 w-44 h-28 bg-transparent rounded-lg flex items-center justify-center p-4 transition-transform duration-300 cursor-pointer group hover:scale-105"
            >
              <div className="w-32 h-20 relative flex items-center justify-center">
                <img
                  src={collab.logo}
                  alt={collab.name}
                  className="absolute inset-0 w-full h-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-0"
                />
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

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-mobile {
          animation: scroll 50s linear infinite;
        }

        .animate-scroll-tablet {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-desktop {
          animation: scroll 30s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll-tablet {
            animation-duration: 30s;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll-desktop {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}