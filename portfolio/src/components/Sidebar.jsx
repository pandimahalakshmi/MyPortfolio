import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-black/95 border-t border-white/10 backdrop-blur-md py-3 flex justify-evenly items-center gap-3 md:inset-y-0 md:right-0 md:left-auto md:top-0 md:w-24 md:h-screen md:flex-col md:justify-center md:border-t-0 md:border-l">
      <NavLink to="/" label="Home" icon={<FaHome />} />
      <NavLink to="/about" label="About" icon={<FaUser />} />
      <NavLink to="/skills" label="Skills" icon={<FaCode />} />
      <NavLink to="/projects" label="Projects" icon={<FaProjectDiagram />} />
      <NavLink to="/contact" label="Contact" icon={<FaEnvelope />} />
    </div>
  );
}

function NavLink({ to, label, icon }) {
  return (
    <div className="relative group flex items-center justify-center">
      <Link
        to={to}
        className="text-white text-2xl p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
      >
        {icon}
      </Link>
      <span className="hidden md:block absolute right-16 bg-yellow-400 text-black px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
        {label}
      </span>
    </div>
  );
}

export default Sidebar;