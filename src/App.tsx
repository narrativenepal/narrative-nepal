import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedStories from './components/FeaturedStories';
import Categories from './components/Categories';
import LatestDocumentaries from './components/LatestDocumentaries';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import OurPhilosophy from './components/OurPhilosophy';
import FounderNote from './components/FounderNote';
import OurCollaborators from './components/OurCollaborators';
import Contact from './components/Contact';

function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <FeaturedStories />
      <AboutUs />
      <OurPhilosophy />
      <FounderNote />
      {/* <OurCollaborators />
      <LatestDocumentaries />
      <Contact /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
