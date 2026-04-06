import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="fixed right-0 top-0 h-screen w-24 bg-black flex flex-col items-center justify-center gap-10 z-50">

      <div className="relative group flex items-center">
        <Link to="/" className="text-white text-2xl p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <FaHome />
        </Link>
        <span className="absolute right-16 bg-yellow-400 text-black px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Home
        </span>
      </div>

      <div className="relative group flex items-center">
        <Link to="/about" className="text-white text-2xl p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <FaUser />
        </Link>
        <span className="absolute right-16 bg-yellow-400 text-black px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          About
        </span>
      </div>

      <div className="relative group flex items-center">
        <Link to="/skills" className="text-white text-2xl p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <FaCode />
        </Link>
        <span className="absolute right-16 bg-yellow-400 text-black px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Skills
        </span>
      </div>

      <div className="relative group flex items-center">
        <Link to="/projects" className="text-white text-2xl p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <FaProjectDiagram />
        </Link>
        <span className="absolute right-16 bg-yellow-400 text-black px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Projects
        </span>
      </div>

      <div className="relative group flex items-center">
        <Link to="/contact" className="text-white text-2xl p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <FaEnvelope />
        </Link>
        <span className="absolute right-16 bg-yellow-400 text-black px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Contact
        </span>
      </div>

    </div>
  );
}

export default Sidebar;