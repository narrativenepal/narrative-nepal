import { Clock, Play } from 'lucide-react';
import { documentaries } from '../assets/ProjectAssets';



export default function LatestDocumentaries() {
  return (
    <section className="py-20 bg-black" id='documentaries'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Documentary & Film Projects</h2>
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
