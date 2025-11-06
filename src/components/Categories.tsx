import { Waves, Mountain, Globe, Flame, Camera, Compass } from 'lucide-react';

const categories = [
  { icon: Waves, name: "Wildlife", color: "bg-blue-600" },
  { icon: Mountain, name: "Nature", color: "bg-green-600" },
  { icon: Globe, name: "Environment", color: "bg-emerald-600" },
  { icon: Flame, name: "Science", color: "bg-orange-600" },
  { icon: Camera, name: "Photography", color: "bg-purple-600" },
  { icon: Compass, name: "Exploration", color: "bg-red-600" }
];

export default function Categories() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
         <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore by Category</h2>
          <div className="w-20 h-1 bg-[#FFCC00] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group relative overflow-hidden bg-zinc-900 hover:bg-zinc-800 p-8 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-bold text-center group-hover:text-[#FFCC00] transition-colors">
                {category.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
