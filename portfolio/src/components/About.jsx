import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-black text-white px-4 py-10 md:px-10 md:py-16 lg:px-20 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold inline-flex flex-wrap justify-center gap-2">
              <span>ABOUT</span>
              <span className="text-yellow-400">ME</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[3px] bg-yellow-400 mt-3 w-full"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-yellow-500/10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-4">PERSONAL INFO</h3>
            <div className="grid grid-cols-1 gap-4 text-sm md:text-base text-gray-200">
              <div className="grid grid-cols-[minmax(120px,_auto)_1fr] gap-2 items-center">
                <span className="text-gray-400">Name:</span>
                <span>Pandi Mahalakshmi</span>
              </div>
              <div className="grid grid-cols-[minmax(120px,_auto)_1fr] gap-2 items-center">
                <span className="text-gray-400">Age:</span>
                <span>22</span>
              </div>
              <div className="grid grid-cols-[minmax(120px,_auto)_1fr] gap-2 items-center">
                <span className="text-gray-400">Nationality:</span>
                <span>Indian</span>
              </div>
              <div className="grid grid-cols-[minmax(120px,_auto)_1fr] gap-2 items-center">
                <span className="text-gray-400">Languages:</span>
                <span>Tamil, English</span>
              </div>
              <div className="grid grid-cols-[minmax(120px,_auto)_1fr] gap-2 items-center">
                <span className="text-gray-400">GitHub:</span>
                <a
                  href="https://github.com/pandimahalakshmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 break-words"
                >
                  pandimahalakshmi
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-yellow-500/10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-4">CONTACT DETAILS</h3>
            <div className="grid grid-cols-1 gap-4 text-sm md:text-base text-gray-200">
              <div className="grid grid-cols-[minmax(120px,_auto)_1fr] gap-2 items-center">
                <span className="text-gray-400">Email:</span>
                <span>pandimahalakshmi5@gmail.com</span>
              </div>
              <div className="grid grid-cols-[minmax(120px,_auto)_1fr] gap-2 items-center">
                <span className="text-gray-400">LinkedIn:</span>
                <a
                  href="https://linkedin.com/in/mahalakshmi19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400"
                >
                  mahalakshmi19
                </a>
              </div>
              <div className="grid grid-cols-[minmax(120px,_auto)_1fr] gap-2 items-center">
                <span className="text-gray-400">Phone:</span>
                <span>9597487751</span>
              </div>
              <div className="grid grid-cols-[minmax(120px,_auto)_1fr] gap-2 items-center">
                <span className="text-gray-400">Address:</span>
                <span>Kovilpatti, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
