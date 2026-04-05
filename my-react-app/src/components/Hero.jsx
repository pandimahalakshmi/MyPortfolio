import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-yellow-400 text-5xl font-bold p-5"
        >
          I'm Pandi Mahalakshmi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 font-bold text-4xl"
        >
          Web Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-10 max-w-screen-sm text-left"
        >
        I am a passionate Web Developer specializing in building responsive and user-friendly web applications.
          I enjoy working with modern technologies like HTML, CSS, Tailwind CSS, JavaScript, and React to create clean and efficient solutions.
        </motion.p>

        <div className="flex justify-center gap-4 mt-6">

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="border-2 border-yellow-400 px-6 py-2 rounded-3xl"
          >
            HIRE ME
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="border-2 border-yellow-400 px-6 py-2 rounded-3xl"
          >
            DOWNLOAD CV
          </motion.button>

        </div>

      </div>

    </section>
  );
}

export default Hero;