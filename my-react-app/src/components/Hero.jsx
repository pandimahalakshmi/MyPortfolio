function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="text-center">

        <h1 className= "text-yellow-400 text-5xl font-bold p-5">
         I'm   Pandi Mahalakshmi
        </h1>

        <p className=" mt-4 font-bold text-4xl">
          Web Developer
        </p>
        <p className="p-10 max-w-screen-sm text-left">
          I am a passionate Web Developer specializing in building responsive and user-friendly web applications.
          I enjoy working with modern technologies like HTML, CSS, Tailwind CSS, JavaScript, and React to create clean and efficient solutions.</p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="/contact">
            <button className="border-2 tracking-wider font-bold border-yellow-400 hover:text-black hover:bg-yellow-400 text-white px-6 py-2 rounded-3xl">
              HIRE ME
            </button>
          </a>

          <a href="/CV.pdf" download>
            <button className="border-2 tracking-wider font-bold border-yellow-400 hover:text-black hover:bg-yellow-400 text-white px-6 py-2 rounded-3xl">
              DOWNLOAD CV
            </button>
          </a>
        </div>

      </div>

    </section>
  )
}

export default Hero