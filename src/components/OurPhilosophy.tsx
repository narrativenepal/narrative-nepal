// export default function OurPhilosophy() {
//     return (
//       <section className="py-24 bg-black text-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          
//           {/* Left Image */}
//           {/* <div className="relative overflow-hidden rounded-2xl order-2 md:order-1">
//             <img
//               src="https://res.cloudinary.com/dypqxeikm/image/upload/v1761586487/the_stories_of_pashupatinath_fon10v.jpg"
//               alt="Our Philosophy"
//               className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
//           </div> */}
  
//           {/* Right Content */}
//           <div className="order-1 md:order-2">
//             <div className="mb-6">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Philosophy</h2>
//               <div className="w-20 h-1 bg-[#FFCC00]"></div>
//             </div>
  
//             <p className="text-[#FFCC00] text-2xl md:text-3xl font-semibold mb-6">
//               Everyone has a story.
//             </p>
  
//             <p className="text-gray-300 text-lg leading-relaxed mb-5">
//               We help you tell yours — truthfully and beautifully.
//             </p>
  
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Our work bridges art and advocacy — transforming lived experiences
//               into visual narratives that invite audiences to see, feel, and act.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }



import { Heart, Eye, Film } from 'lucide-react';

export default function OurPhilosophy() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Philosophy</h2>
          <div className="w-20 h-1 bg-[#FFCC00] mx-auto mb-8"></div>
          {/* <p className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
            Everyone has a story.
          </p>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We help you tell yours — truthfully and beautifully.
          </p> */}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center group">
            <div className="w-20 h-20 bg-[#FFCC00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">See</h3>
            <p className="text-gray-400 leading-relaxed">
              Witness the world through new perspectives and uncover hidden truths
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-[#FFCC00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Feel</h3>
            <p className="text-gray-400 leading-relaxed">
              Connect emotionally with stories that move hearts and inspire change
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-[#FFCC00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Film className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">Act</h3>
            <p className="text-gray-400 leading-relaxed">
              Transform awareness into action and create meaningful impact
            </p>
          </div>
        </div> */}

        <div className="bg-black border-l-4 border-[#FFCC00] p-8 md:p-12">
          {/* <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
            Our work bridges art and advocacy — transforming lived experiences into visual
            narratives that invite audiences to see, feel, and act.
          </p> */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
          Everyone has a story. We help you tell yours — truthfully and beautifully. Our work bridges art and advocacy — transforming lived experiences into visual
          narratives that invite audiences to see, feel, and act.
          </p>
        </div>
      </div>
    </section>
  );
}
