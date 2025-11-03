"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../assets/ProjectAssets";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black md:backdrop-blur-md md:bg-black/30 md:rounded-lg md:max-w-6xl md:mx-auto md:mt-8 border-b-4 border-[#FFCC00] md:border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 rounded-lg bg-none flex items-center justify-center font-bold text-black text-xl">
              <img
                src="https://res.cloudinary.com/dypqxeikm/image/upload/v1762000148/416575684_691411486461622_8760184129598159117_n-removebg-preview_1_o2uq3n.png"
                alt="logo"
                className="rounded-lg"
              />
            </button>
            {/* <h1 className="text-xl font-bold tracking-tight leading-tight">
              NARRATIVE <span className="text-[#FFCC00]">NEPAL</span>
            </h1> */}
          </div>

          {/* CENTER NAV LINKS */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.slice(0, -1).map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-white font-medium hover:text-[#FFCC00] transition-colors nav-link"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* RIGHT CONTACT BUTTON (Desktop only) */}
          <div className="hidden md:flex">
            <a
              href={navLinks[navLinks.length - 1].href}
              className="relative inline-flex items-center gap-2 px-6 py-2 md:border-2 md:border-[#FFCC00] text-[#FFCC00] font-semibold text-sm rounded-full overflow-hidden group transition-all duration-300"
            >
              <span className="relative flex gap-x-3 items-center z-10 transition-all duration-300 group-hover:text-black">
                {navLinks[navLinks.length - 1].label}
                <ArrowRight className="z-10" />
              </span>
              <span className="absolute inset-0 bg-[#FFCC00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay behind mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-800 transform transition-transform duration-300 ease-in-out md:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
          <h2 className="text-[#FFCC00] text-lg font-bold tracking-wider">MENU</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 space-y-5 text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block hover:text-[#FFCC00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}



// "use client";

// import { ArrowRight, Menu, X } from "lucide-react";
// import { useState } from "react";

// const navLinks = [
//   { label: "HOME", href: "#" },
//   { label: "ABOUT US", href: "#about-us" },
//   { label: "DOCUMENTARIES", href: "#documentaries" },
//   { label: "CONTACT", href: "#contact" },
// ];

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30  rounded-lg max-w-6xl mx-auto md:mt-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="w-10 h-10 bg-[#FFCC00] border border-[#FFCC00] rounded-lg flex items-center justify-center overflow-hidden">
//               <img
//                 src="https://res.cloudinary.com/dv9s1kiz2/image/upload/v1761496033/416575684_691411486461622_8760184129598159117_n_znftff.jpg"
//                 alt="Narrative Nepal Logo"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex flex-1 justify-center space-x-8">
//             {navLinks.slice(0, -1).map(({ label, href }) => (
//               <a
//                 key={label}
//                 href={href}
//                 className="text-sm font-medium hover:text-[#FFCC00] transition-colors"
//               >
//                 {label}
//               </a>
//             ))}
//           </nav>

//           {/* Contact Button (Desktop) */}
//           <div className="hidden md:flex">
//             <a
//               href={navLinks[navLinks.length - 1].href}
//               className="relative inline-flex items-center gap-2 px-6 py-2 md:border-2 md:border-[#FFCC00] text-[#FFCC00] font-semibold text-sm rounded-full overflow-hidden group transition-all duration-300"
//             >
//               <span className="relative flex gap-x-3 items-center z-10 transition-all duration-300 group-hover:text-black">
//                 {navLinks[navLinks.length - 1].label}
//                 <ArrowRight className="z-10" />
//               </span>
//               <span className="absolute inset-0 bg-[#FFCC00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Overlay behind menu */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
//           onClick={() => setIsMenuOpen(false)}
//         ></div>
//       )}

//       {/* Mobile Slide Menu */}
//       <div
//         className={`fixed top-0 right-0  h-full w-64 bg-black border-l border-gray-800 transform transition-transform duration-300 ease-in-out md:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
//           <h2 className="text-[#FFCC00] text-lg font-bold tracking-wider">
//             MENU
//           </h2>
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         <nav className="flex flex-col px-6 py-6 space-y-5 text-sm font-medium">
//           {navLinks.map(({ label, href }) => (
//             <a
//               key={label}
//               href={href}
//               className="block hover:text-[#FFCC00] transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {label}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }
