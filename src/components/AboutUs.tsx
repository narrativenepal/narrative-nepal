export default function AboutUs() {
    return (
      <section className="py-24 bg-black text-white" id="about-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
              <div className="w-20 h-1 bg-[#FFCC00]"></div>
            </div>
  
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#FFCC00]">
              Who We Are
            </h3>
  
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Narrative Nepal is a documentary production studio dedicated to uncovering
              stories that move people and make change.
            </p>
  
            {/* <p className="text-gray-300 text-lg leading-relaxed mb-5">
              We believe documentaries are more than films — they are tools for empathy,
              justice, and collective reflection.
            </p> */}
  
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Founded by filmmaker <span className="font-semibold text-white">Suvash Chaulagain</span>, our studio brings together writers, cinematographers, and editors
              who share a common mission: to tell stories of human resilience, identity, and belonging.
            </p>
  
            <p className="text-gray-300 text-lg leading-relaxed">
              From mountain villages to bustling city streets, we document life as it unfolds —
              real, raw, and deeply human.
            </p>
          </div>
  
          {/* Right Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://res.cloudinary.com/dypqxeikm/image/upload/v1761586098/_A7_7775_d0stq1.jpg"
              alt="Narrative Nepal Team"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
        </div>
      </section>
    );
  }