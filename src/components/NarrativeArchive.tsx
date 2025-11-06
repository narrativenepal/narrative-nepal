"use client";
import { useState } from "react";
import { Play, Clock } from "lucide-react";

export default function NarrativeArchive() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-zinc-950" id="archive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Narrative Archive
          </h2>
          <div className="w-20 h-1 bg-[#FFCC00] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every film leaves behind a trail of questions, connections, and discoveries.
            Through the Narrative Archive, we share reflections, field diaries,
            behind-the-scenes experiences, and creative essays from our documentary journey.
          </p>
        </div>

        {/* Video Section Styled Like Documentary Cards */}
        <div className="flex justify-center">
          <article className="group relative w-full max-w-3xl rounded-lg overflow-hidden cursor-pointer shadow-xl">
            {isPlaying ? (
             <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/cJfCW-qHOSA?autoplay=1"
                title="Narrative Archive Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  src="https://res.cloudinary.com/dypqxeikm/image/upload/v1761999445/Untitled_design_12_sllkd1.png"
                  alt="Narrative Archive"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 rounded-full bg-[#FFCC00] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    <Play className="w-8 h-8 text-black fill-current ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-[#FFCC00] text-black px-3 py-1 text-xs font-bold">
                  Archive Video
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white text-sm bg-black/70 px-2 py-1 rounded">
                  <Clock className="w-4 h-4" />
                  <span>04:46</span>
                </div>
              </>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
