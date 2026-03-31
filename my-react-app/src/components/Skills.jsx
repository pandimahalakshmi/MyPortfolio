import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen bg-black text-white p-20">

      <div className="flex justify-center mb-28">
        <h2 className="text-4xl font-bold border-b-2 border-yellow-400 pb-2 transition-all duration-500">
          My <span className="text-yellow-400">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5  justify-items-center">

        <div className="flex flex-col items-center group">
          <FaHtml5 className="text-8xl text-orange-500 transition duration-500 group-hover:scale-125 group-hover:rotate-12"/>
          <p className="mt-4">HTML</p>
        </div>

        <div className="flex flex-col items-center group">
          <FaCss3Alt className="text-8xl text-blue-500 transition duration-500 group-hover:scale-125 group-hover:rotate-12"/>
          <p className="mt-4">CSS</p>
        </div>

        <div className="flex flex-col items-center group">
          <SiTailwindcss className="text-8xl text-sky-400 transition duration-500 group-hover:scale-125"/>
          <p className="mt-4">Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center group">
          <FaJsSquare className="text-8xl text-yellow-400 transition duration-500 group-hover:scale-125 group-hover:rotate-12 "/>
          <p className="mt-4">JavaScript</p>
        </div>

        <div className="flex flex-col items-center group">
          <FaReact className="text-8xl text-cyan-400 transition duration-500 group-hover:scale-125 animate-spin"/>
          <p className="mt-4">React</p>
        </div>

      </div>

    </section>
  );
}
export default Skills;