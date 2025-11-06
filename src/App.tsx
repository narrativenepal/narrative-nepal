import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import FounderNote from './components/FounderNote';
import OurCollaborators from './components/OurCollaborators';
import LatestDocumentaries from './components/LatestDocumentaries';
import Services from './components/Services';
import NarrativeArchive from './components/NarrativeArchive';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DeveloperSignature from './components/DeveloperSignature';
import CustomCursor from './components/utils/CustomCursor';
import Loader from './components/utils/Loader';
import { motion } from 'framer-motion';
import DocumentingChanges from './components/DocumentingChanges';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for video and images to load
    const handleLoad = () => setIsLoading(false);

    // Add small timeout to ensure smooth fade transition
    const timeout = setTimeout(() => setIsLoading(false), 3000);

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CustomCursor />
            <Header />
            <Hero />
            <AboutUs />
            <FounderNote />
            <DocumentingChanges />
            <Services />
            <LatestDocumentaries />
            <OurCollaborators />
            <NarrativeArchive />
            <Contact />
            <Footer />
            <DeveloperSignature />
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;
