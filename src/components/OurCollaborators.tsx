const collaborators = [
  { name: "National Geographic", logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587578/igc_business_holding_iufllh.png" },
  { name: "BBC Earth", logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587579/ide_nepal_wof6xq.png" },
  { name: "Discovery Channel", logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587591/fao_nepal_yynu6w.png" },
  { name: "Planet Nepal", logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587593/everest_hand_car_wash_uqk8ic.png" },
  { name: "Wildlife Fund", logo: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761587592/Advik_main_logo_1_ltrb4j.png" },
  { name: "EcoVision", logo: "https://via.placeholder.com/150x80?text=EcoVision" },
];

export default function OurCollaborators() {
  return (
    <section className="py-20 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Collaborators</h2>
          <div className="w-20 h-1 bg-[#FFCC00] mx-auto mb-8"></div>
           <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
           We collaborate with partners who believe in the power of storytelling to drive change.
                    </p> 
        </div>

        {/* Sliding container */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-slide whitespace-nowrap">
            {collaborators.concat(collaborators).map((collab, index) => (
              <div
                key={index}
                className="flex-none w-40 h-24 bg-zinc-900 rounded-lg flex items-center justify-center p-4 hover:scale-105 hover:bg-zinc-800 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={collab.logo}
                  alt={collab.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS animation */}
      <style >{`
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
      `}</style>
    </section>
  );
}