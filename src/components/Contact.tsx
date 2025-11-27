import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-black/30 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dypqxeikm/image/upload/v1764260163/the_galaxy_and_me_1_bfztc4.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let’s tell your story.
          </h2>
          <div className="w-20 h-1 bg-[#FFCC00] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We collaborate with organizations, filmmakers, researchers, and communities to produce
            documentaries that inform, inspire, and create change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:narrativenepal@gmail.com"
            className="flex items-start space-x-4 p-6 bg-black/60 hover:bg-black/80 rounded-lg transition-all group border-l-4 border-transparent hover:border-[#FFCC00]"
          >
            <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-[#FFCC00] transition-colors">Email</h3>
              <p className="text-gray-200">narrativenepal@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+9779843937267"
            className="flex items-start space-x-4 p-6 bg-black/60 hover:bg-black/80 rounded-lg transition-all group border-l-4 border-transparent hover:border-[#FFCC00]"
          >
            <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-[#FFCC00] transition-colors">Phone</h3>
              <p className="text-gray-200">+977 9843937267</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start space-x-4 p-6 bg-black/60 rounded-lg border-l-4 border-[#FFCC00]">
            <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Location</h3>
              <p className="text-gray-200">Sanothimi, Bhaktapur, Nepal</p>
            </div>
          </div>

          {/* Website */}
          <a
            href="https://www.narrativenepal.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start space-x-4 p-6 bg-black/60 hover:bg-black/80 rounded-lg transition-all group border-l-4 border-transparent hover:border-[#FFCC00]"
          >
            <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-[#FFCC00] transition-colors">Website</h3>
              <p className="text-gray-200">www.narrativenepal.com.np</p>
            </div>
          </a>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6 text-white">Follow Our Journey</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/narrativenepal"
              className="w-14 h-14 bg-black/60 hover:bg-[#FFCC00] rounded-full flex items-center justify-center transition-all group border-2 border-gray-800 hover:border-[#FFCC00]"
            >
              <Facebook className="w-6 h-6 group-hover:text-black transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/narrativenepal"
              className="w-14 h-14 bg-black/60 hover:bg-[#FFCC00] rounded-full flex items-center justify-center transition-all group border-2 border-gray-800 hover:border-[#FFCC00]"
            >
              <Instagram className="w-6 h-6 group-hover:text-black transition-colors" />
            </a>
            <a
              href="https://www.youtube.com/@narrativenepal"
              className="w-14 h-14 bg-black/60 hover:bg-[#FFCC00] rounded-full flex items-center justify-center transition-all group border-2 border-gray-800 hover:border-[#FFCC00]"
            >
              <Youtube className="w-6 h-6 group-hover:text-black transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
