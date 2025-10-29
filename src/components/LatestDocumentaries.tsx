import { Clock, Play } from 'lucide-react';

const documentaries = [
  {
    id: 1,
    title: "Kaligandaki Gaunpalika",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670565/kaligandaki_thumanil_2_e28bc7.png",
    duration: "5 min",
    category: "WILDLIFE"
  },
  {
    id: 2,
    title: "Anti Human Traffiking",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670565/anti_human_traffiking_-_thumnail_ip7tfy.png",
    duration: "52 min",
    category: "AWARENESS"
  },
  {
    id: 3,
    title: "Volcanic Wonders",
    image: "https://images.pexels.com/photos/14458166/pexels-photo-14458166.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "48 min",
    category: "SCIENCE"
  },
  {
    id: 4,
    title: "Sahara: Life in Extremes",
    image: "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "50 min",
    category: "EXPLORATION"
  },
  {
    id: 5,
    title: "Mountain Kingdoms",
    image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "55 min",
    category: "CULTURE"
  },
  {
    id: 6,
    title: "Coral Reefs in Crisis",
    image: "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "42 min",
    category: "ENVIRONMENT"
  }
];

export default function LatestDocumentaries() {
  return (
    <section className="py-20 bg-black" id='documentaries'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Documentaries</h2>
            <div className="w-20 h-1 bg-[#FFCC00]"></div>
          </div>
          <button className="text-[#FFCC00] font-bold hover:underline hidden sm:block">
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentaries.map((doc) => (
            <article
              key={doc.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4 aspect-video rounded-lg">
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
              <h3 className="text-xl font-bold group-hover:text-[#FFCC00] transition-colors">
                {doc.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
