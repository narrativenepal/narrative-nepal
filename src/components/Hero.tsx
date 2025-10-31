import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsVideoOpen(false);
      setIsInfoOpen(false);
    }
  };

  return (
    
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://www.pexels.com/download/video/34514679/"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-[#FFCC00] text-black text-xs font-bold mb-4">
            FEATURED DOCUMENTARY
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Kaligandaki Gaunpalika
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            A glimpse into the heart of rural Nepal - its people, culture, and timeless beauty captured through the lens of Kaligandaki Gaunpalika.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center space-x-2 bg-[#FFCC00] text-black px-8 py-4 font-bold hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>WATCH NOW</span>
            </button>
            <button
              onClick={() => setIsInfoOpen(true)}
              className="border-2 border-white px-8 py-4 font-bold hover:bg-white hover:text-black transition-all"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            key="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-[#FFCC00] transition"
              >
                <X className="w-8 h-8" />
              </button>
              <iframe
                src="https://drive.google.com/file/d/1zPlsQ3dAzqvlKrFc6PizTd3SqIiewEy0/view?usp=drive_link"
                title="Kaligandaki Documentary"
                className="w-full h-full rounded-xl"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Modal */}
      <AnimatePresence>
        {isInfoOpen && (
          <motion.div
            key="info-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white text-black rounded-2xl max-w-2xl w-full p-8 shadow-lg"
            >
              <button
                onClick={() => setIsInfoOpen(false)}
                className="absolute top-4 right-4 text-black hover:text-[#FFCC00] transition"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex"> <h2 className="text-3xl md:px-3 rounded-lg md:py-1 font-bold mb-4 text-black  md:bg-[#FFCC00]">About the Documentary</h2></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                *Kaligandaki Gaunpalika* explores the breathtaking landscapes,
                cultural traditions, and everyday lives of the people residing
                along the Kaligandaki River in Nepal. This documentary highlights
                the harmony between nature and community, revealing stories of
                resilience, heritage, and hope that define this remarkable region.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}