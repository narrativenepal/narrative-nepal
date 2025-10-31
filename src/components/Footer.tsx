import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

//if border needed then: border-t-4 border-[#FFCC00]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">

            {/* Left section: Logo and Description */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10  bg-[#FFCC00] flex items-center justify-center overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dv9s1kiz2/image/upload/v1761496033/416575684_691411486461622_8760184129598159117_n_znftff.jpg"
                    alt="Narrative Nepal Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="ml-3 text-xl font-bold tracking-tight leading-tight text-white">
                  NARRATIVE <span className="text-[#FFCC00]">NEPAL</span>
                </h1>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Narrative Nepal © 2025<br />
                Everyone has a story. We help you tell yours.
              </p>
            </div>
            {/* Right section: Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 Narrative Nepal Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
