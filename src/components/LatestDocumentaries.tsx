"use client";
import { useState } from "react";
import { Clock, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const documentaries = [
  {
    id: 1,
    title: "Election Commission Nepal – PSA Campaign",
    description:
      "Two public service videos featuring Dayahang Rai and Nepali youths promoting fair and inclusive elections.",
    agency:
      "International Foundation for Electoral Systems Nepal / Election Commission Nepal",
    duration: "3:45",
    category: "PSA Campaign",
    videoId: "VIDEO_ID_1",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1762343751/election_comission_tz5ah9.png",
  },
  {
    id: 2,
    title: "Ma Kali – Kaligandaki Gaupalika Documentary",
    description:
      "A documentary exploring the history, present, and future of Kaligandaki Gaupalika, showcasing its people, culture, and local development initiatives",
    agency: "NCE Nepal / CARE Nepal / CEHRD",
    duration: "5:20",
    category: "Kaligandaki Gaupalika",
    videoId: "VIDEO_ID_2",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670565/kaligandaki_thumanil_2_e28bc7.png",
  },
  {
    id: 3,
    title: "I am Large Cardamom – 2D Explainer Video",
    description:
      "A creative 2D video introducing large cardamom as the “King of Spices” — showcasing its uses in Nepal and presenting it to the world.",
    agency: "Kings College / FAO Nepal",
    duration: "2:15",
    category: "Explainer Video",
    videoId: "VIDEO_ID_3",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670566/i_am_large_cardamom_thumanail_da0b10.png",
  },
  {
    id: 4,
    title: "PSA – Safe Migration & Anti-Human Trafficking",
    description:
      "Public awareness video raising voices for safe migration and preventing human trafficking in Makwanpur District.",
    agency:
      "Women Skill Creation Center Nepal / AWO International / BMZ",
    duration: "4:10",
    category: "PSA",
    videoId: "VIDEO_ID_4",
    image:
      "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670565/anti_human_traffiking_-_thumnail_ip7tfy.png",
  },
  {
    id: 5,
    title: "Solid Health Documentary",
    description:
      "Documentary showcasing community and municipal-led innovations in environmental health and solid waste management across multiple Nepali cities.",
    agency:
      "NeDS Nepal / International Centre for Occupational, Environmental and Public Health / DASAM / Civil Society in Development (Denmark)",
    duration: "10:00",
    category: "Documentary",
    videoId: "VIDEO_ID_5",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1762343799/solid_health_project_1_p87tjz.png",
  },
  {
    id: 6,
    title: "RePLANT Project Documentary",
    description:
      "A film highlighting how rural farmers, women cooperatives, and local enterprises adapt to climate challenges and reduce post-harvest losses through innovative storage solutions.",
    agency: "iDE Nepal (partners: SDF, RWDC, MNBBL, SIL, NAF Seed Pvt. Ltd.)",
    duration: "8:35",
    category: "Documentary",
    videoId: "VIDEO_ID_6",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1762343801/replant_ylpr3d.png",
  },
  {
    id: 7,
    title: "UDAAN Project – Non-Formal Education Videos",
    description:
      "37 educational videos supporting literacy and numeracy for out-of-school children. Produced in partnership with CARE Nepal and CEHRD.",
    agency: "NCE Nepal / CARE Nepal / CEHRD",
    duration: "5:20",
    category: "Education",
    videoId: "VIDEO_ID_2",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1762343769/udan_project_d1lv9g.png",
  },
  {
    id: 8,
    title: "Khatapana – About Us Video",
    description:
      "Brand introduction video for a fintech app helping Nepalis manage daily financial transactions.",
    agency: "Finnove Technologies",
    duration: "2:15",
    category: "Brand Video",
    videoId: "VIDEO_ID_3",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1762343725/khatapana_smotoh.png",
  },
];

export default function LatestDocumentaries() {
  const [showAll, setShowAll] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<any | null>(null);

  const displayedDocs = showAll ? documentaries : documentaries.slice(0, 6);

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <section className="py-24 md:py-32 bg-black" id="documentaries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Stories We’ve Shaped
            </h2>
            <div className="w-20 h-1 bg-[#FFCC00]"></div>
          </div>
          <button
            className="text-[#FFCC00] font-bold hover:underline hidden sm:block"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedDocs.map((doc) => (
            <article key={doc.id} className="group cursor-pointer">
              <div
                className="relative overflow-hidden mb-4 aspect-video rounded-lg shadow-lg"
                onClick={() => handleVideoClick(doc.videoId)}
              >
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#FFCC00] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#FFCC00] text-black px-3 py-1 text-xs font-bold">
                  {doc.category}
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white text-sm bg-black/70 px-2 py-1 rounded">
                  <Clock className="w-4 h-4" />
                  <span>{doc.duration}</span>
                </div>
              </div>
              {/* Clickable title for modal */}
              <h3
                className="text-xl font-bold text-white hover:text-[#FFCC00] transition-colors"
                onClick={() => setSelectedDoc(doc)}
              >
                {doc.title}
              </h3>
            </article>
          ))}
        </div>
      </div>

      {/* Modal for Description */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-900 text-white p-8 rounded-2xl max-w-lg w-full relative shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedDoc(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-3 text-[#FFCC00]">
                {selectedDoc.title}
              </h3>
              <p className="text-gray-300 mb-4">{selectedDoc.description}</p>
              <p className="text-sm italic text-gray-400">
                <span className="font-semibold text-white">Agency:</span>{" "}
                {selectedDoc.agency}
              </p>
              <p className="text-sm mt-2 text-gray-400">
                <span className="font-semibold text-white">Duration:</span>{" "}
                {selectedDoc.duration}
              </p>
              <p className="text-sm mt-1 text-gray-400">
                <span className="font-semibold text-white">Category:</span>{" "}
                {selectedDoc.category}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
