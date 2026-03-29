function Projects() {
  return (
    <section id="projects" className="mr-20 bg-black text-white p-20">

      <h2 className="text-5xl font-bold text-center mb-36">
        My <span className="text-yellow-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* ATS Project Card */}
        <div className="bg-gray-900 rounded-xl p-8 hover:scale-105 hover:bg-gray-800 transition duration-300">

          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            ATS Project
          </h3>

          <p className="text-gray-300">
           Developed a full-stack Applicant Tracking System using the MERN stack that enables recruiters to manage job postings and track candidate applications through an interactive dashboard.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="http://localhost:5174"
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
            >
              View Project
            </a>

            <a
              href="https://github.com/pandimahalakshmi/Application-Tracking-System.git"
              className="border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black"
            >
              GitHub
            </a>
          </div>

        </div>


        {/* Portfolio Project Card */}
        <div className="bg-gray-900 rounded-xl p-8 hover:scale-105 hover:bg-gray-800 transition duration-300">

          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Personal Portfolio
          </h3>

          <p className="text-gray-300">
            A modern responsive portfolio website built using React and 
            Tailwind CSS to showcase my skills, projects, and contact 
            information.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="/"
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/pandimahalakshmi/MyPortfolio.git"
              className="border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black"
            >
              GitHub
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;