import { Video, FileText, Scissors, MapPin, Megaphone, Users } from 'lucide-react';

const campaigns = [
  { icon: Video, name: "Documentary Production", color: "bg-blue-600" },
  { icon: FileText, name: "Research & Script Writing", color: "bg-green-600" },
  { icon: Scissors, name: "Editing & Post-production", color: "bg-purple-600" },
  { icon: MapPin, name: "Line Production", color: "bg-red-600" },
  { icon: Users, name: "Event Documentation", color: "bg-orange-600" },
  { icon: Megaphone, name: "PSAs for NGOs & Social Orgs", color: "bg-yellow-600" }
];

export default function Services() {
  return (
    <section className="py-20 bg-zinc-950" id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-[#FFCC00] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We create advocacy campaigns that educate, engage, and inspire, blending real human stories with cinematic visuals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {campaigns.map((campaign) => (
            <button
              key={campaign.name}
              className="group relative overflow-hidden bg-zinc-900 hover:bg-zinc-800 p-8 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <div className={`${campaign.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <campaign.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-bold text-center group-hover:text-[#FFCC00] transition-colors">
                {campaign.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
