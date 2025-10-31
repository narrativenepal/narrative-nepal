import { Play } from 'lucide-react';
import { stories } from '../assets/ProjectAssets';



export default function FeaturedStories() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Stories</h2>
            <div className="w-20 h-1 bg-[#FFCC00]"></div>
          </div>
          <button className="text-[#FFCC00] font-bold hover:underline hidden sm:block">
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <article
              key={story.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#FFCC00] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#FFCC00] text-black px-3 py-1 text-xs font-bold">
                  {story.category}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#FFCC00] transition-colors">
                {story.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {story.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
