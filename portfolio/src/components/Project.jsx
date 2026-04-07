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
      className="w-full min-h-screen bg-black text-white px-4 py-10 md:px-10 md:py-16 lg:px-20 lg:py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl font-bold inline-flex gap-2">
              <span>My</span>
              <span className="text-yellow-400">Projects</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="h-[3px] bg-yellow-400 mt-2 w-full"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {projects.map((project) => (

            <div
              key={project.title}
              className="flex flex-col justify-between
              rounded-3xl border border-white/10 bg-white/5
              p-6 md:p-8
              shadow-xl shadow-black/40
              hover:-translate-y-2 hover:bg-white/10
              transition-all duration-300"
            >

              {/* Top Content */}
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <a
                  href={project.liveUrl}
                  className="flex-1 text-center
                  bg-yellow-400 text-black
                  px-4 py-2
                  rounded-3xl font-semibold
                  text-sm md:text-sm lg:text-base
                  transition hover:bg-yellow-500"
                >
                  {project.liveLabel}
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center
                  border-2 border-yellow-400 text-yellow-400
                  px-4 py-2
                  rounded-3xl font-semibold
                  text-sm md:text-sm lg:text-base
                  transition hover:bg-yellow-400 hover:text-black"
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