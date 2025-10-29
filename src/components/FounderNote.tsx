export default function FoundersNote() {
    return (
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image */}
          <div className="relative overflow-hidden rounded-2xl order-2 md:order-1">
            <img
              src="https://res.cloudinary.com/dypqxeikm/image/upload/v1761586692/IMG_1161_flcupo.jpg"
              alt="Founder"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
  
          {/* Right Side: Content */}
          <div className="order-1 md:order-2">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Founder’s Note</h2>
              <div className="w-20 h-1 bg-[#FFCC00]"></div>
            </div>
  
            <p className="text-[#FFCC00] text-xl md:text-2xl font-semibold mb-2">
              From the Director
            </p>
  
            <blockquote className="text-gray-300 text-lg leading-relaxed italic mb-6 border-l-4 border-[#FFCC00] pl-4">
              “My journey began in the fields of Chitwan, documenting the Musahar community’s struggle for recognition.
              That experience taught me that film can be a form of resistance — a way to restore dignity to forgotten lives.
              Narrative Nepal was born from that vision: to make documentaries that don’t just inform, but transform.”
            </blockquote>
  
            <p className="text-gray-300 text-lg font-medium mb-1">
              — <span className="text-white font-semibold">Suvash Chaulagain</span>
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Founder | Director | Documentary Filmmaker
            </p>
  
            <a
              href="#"
              className="inline-flex items-center text-[#FFCC00] font-semibold text-lg hover:underline"
            >
              🎬 Explore Suvash’s Films
            </a>
          </div>
        </div>
      </section>
    );
  }