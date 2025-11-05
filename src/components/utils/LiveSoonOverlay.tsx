import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const dotVariants: Variants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 1.2,
      delay: i * 0.2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

const LiveSoonOverlay: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-black flex items-center justify-center px-4 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center space-y-6 sm:space-y-8 max-w-xl sm:max-w-2xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Section */}
        <motion.div className="relative inline-block" variants={itemVariants}>
          <motion.div
            className="absolute inset-0 bg-[#FFCC00] opacity-20 blur-3xl rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="relative p-6 sm:p-8 rounded-3xl shadow-2xl"
            variants={logoVariants}
            animate={floatingVariants.animate as any}
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://res.cloudinary.com/dypqxeikm/image/upload/v1762000148/416575684_691411486461622_8760184129598159117_n-removebg-preview_1_o2uq3n.png"
              alt="Narrative Nepal Logo"
              className="w-20 sm:w-24 md:w-28 mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#FFD700]"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Get ready, we’re almost here!
          </motion.h1>
          <motion.p
            className="text-md sm:text-lg md:text-xl text-gray-300 font-light tracking-wide"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            A journey through real lives, captured with passion
          </motion.p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div className="flex items-center justify-center space-x-2 sm:space-x-3" variants={itemVariants}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#FFCC00] rounded-full"
              custom={i}
              animate="animate"
              variants={dotVariants}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#FFCC00] opacity-5 rounded-full blur-3xl"
        animate={{ x: [0, 50, -30, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#FFCC00] opacity-5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 30, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default LiveSoonOverlay;
