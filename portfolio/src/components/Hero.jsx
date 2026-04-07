import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4 py-10 md:px-10 md:py-16 lg:px-20 lg:py-20">
      <div className="max-w-3xl w-full rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl shadow-yellow-500/10 backdrop-blur-xl lg:border-none lg:bg-transparent lg:shadow-none lg:backdrop-blur-none lg:p-0">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400"
          >
            I'm Pandi Mahalakshmi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xl md:text-3xl lg:text-4xl font-semibold"
          >
            Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto"
          >
            I am a passionate Web Developer specializing in building responsive and user-friendly web applications.
            I enjoy working with modern technologies like HTML, CSS, Tailwind CSS, JavaScript, and React to create clean and efficient solutions.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-yellow-400 bg-yellow-400 text-black px-6 py-2.5 rounded-3xl text-sm md:text-base font-semibold transition-all duration-300 hover:bg-yellow-500"
              onClick={() => navigate("/contact")}
            >
              HIRE ME
            </motion.button>

            <a href="/resume.pdf" download className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full border-2 border-yellow-400 text-yellow-400 px-6 py-2.5 rounded-3xl text-sm md:text-base font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black"
              >
                DOWNLOAD CV
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;