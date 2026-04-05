import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "ATS Project",
      description:
        "Developed a full-stack Applicant Tracking System using the MERN stack that enables recruiters to manage job postings and track candidate applications through an interactive dashboard.",
      liveUrl: "http://localhost:5174",
      liveLabel: "View Project",
      githubUrl: "https://github.com/pandimahalakshmi/Application-Tracking-System.git",
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern responsive portfolio website built using React and Tailwind CSS to showcase my skills, projects, and contact information.",
      liveUrl: "/",
      liveLabel: "Live Demo",
      githubUrl: "https://github.com/pandimahalakshmi/MyPortfolio.git",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-black text-white overflow-x-hidden py-20 px-4 md:px-8"
    >
      {/* Constrain content away from the 96px sidebar on the right */}
      <div className="max-w-screen-xl mx-auto pr-24">

        <div className="flex justify-center mb-16 md:mb-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-center inline-flex flex-wrap justify-center gap-2 pb-2 mb-3">
              <span>My</span>
              <span className="text-yellow-400">Projects</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[3px] bg-yellow-400 mx-auto origin-left"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 animate-fadeIn">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-xl p-6 md:p-8
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-1 hover:shadow-xl hover:bg-gray-800
                         will-change-transform"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href={project.liveUrl}
                  className="bg-yellow-400 text-black px-5 py-2.5 rounded-lg font-semibold
                             transition-all duration-300 ease-in-out text-center
                             hover:bg-yellow-500 hover:shadow-lg hover:scale-105"
                >
                  {project.liveLabel}
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-yellow-400 text-yellow-400 px-5 py-2.5 rounded-lg font-semibold
                             transition-all duration-300 ease-in-out text-center
                             hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
