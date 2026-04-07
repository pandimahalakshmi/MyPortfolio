import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen bg-black text-white px-4 py-10 md:px-10 md:py-16 lg:px-20 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-20">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold inline-flex flex-wrap justify-center gap-2 pb-2">
              <span>My</span>
              <span className="text-yellow-400">Skills</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[3px] bg-yellow-400 mt-2 w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
          {[
            { icon: <FaHtml5 className="text-6xl md:text-7xl text-orange-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />, label: "HTML" },
            { icon: <FaCss3Alt className="text-6xl md:text-7xl text-blue-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />, label: "CSS" },
            { icon: <SiTailwindcss className="text-6xl md:text-7xl text-sky-400 transition-transform duration-500 group-hover:scale-110" />, label: "Tailwind CSS" },
            { icon: <FaJsSquare className="text-6xl md:text-7xl text-yellow-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />, label: "JavaScript" },
            { icon: <FaReact className="text-6xl md:text-7xl text-cyan-400 transition-transform duration-500 group-hover:scale-110 animate-spin-slow" />, label: "React" },
          ].map((skill) => (
            <div
              key={skill.label}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              {skill.icon}
              <p className="mt-4 text-sm md:text-base font-medium">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;