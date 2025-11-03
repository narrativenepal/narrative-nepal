import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      {/* Company Logo with breathing effect */}
      <motion.img
        src="https://res.cloudinary.com/dv9s1kiz2/image/upload/v1761496033/416575684_691411486461622_8760184129598159117_n_znftff.jpg"
        alt="Narrative Nepal"
        className="w-36 h-36 object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0, 1, 1, 0.9],
          scale: [0.9, 1, 1.05, 1],
        }}
        transition={{
          duration: 2.5, // total cycle
          ease: "easeInOut",
          repeat: Infinity, // repeat breathing
        }}
      />

      {/* Subtle loading text */}
      <motion.div
        className="mt-6 text-gray-400 tracking-widest text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        
      >
        Crafting the Narrative…
      </motion.div>
    </div>
  );
}
