import { Play } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: "Beneath the Waves",
    category: "OCEAN",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670565/anti_human_traffiking_-_thumnail_ip7tfy.png",
    description: "Diving deep into the mysteries of marine life"
  },
  {
    id: 2,
    title: "Arctic Frontiers",
    category: "CLIMATE",
    image: "https://res.cloudinary.com/dypqxeikm/image/upload/v1761670566/Untitled_design_9_kkljut.png",
    description: "Documenting the rapid changes in polar regions"
  },
  {
    id: 3,
    title: "Ancient Civilizations",
    category: "HISTORY",
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Uncovering secrets of lost worlds"
  }
];

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
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#FFCC00] transition-colors">
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
