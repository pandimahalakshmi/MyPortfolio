import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen bg-gray-900 text-white px-4 py-10 md:px-10 md:py-16 lg:px-20 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold inline-flex flex-wrap justify-center gap-2 pb-2">
              <span>Contact</span>
              <span className="text-yellow-400">Me</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[3px] bg-yellow-400 mt-2 w-full"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-black/40">
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-1 text-sm md:text-base text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="rounded-2xl bg-gray-800 px-4 py-3 text-sm md:text-base text-white outline-none ring-1 ring-white/10 transition focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm md:text-base text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-2xl bg-gray-800 px-4 py-3 text-sm md:text-base text-white outline-none ring-1 ring-white/10 transition focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm md:text-base text-gray-300">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="rounded-2xl bg-gray-800 px-4 py-3 text-sm md:text-base text-white outline-none ring-1 ring-white/10 transition focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm md:text-base text-gray-300">Subject</label>
              <input
                type="text"
                placeholder="Project subject"
                className="rounded-2xl bg-gray-800 px-4 py-3 text-sm md:text-base text-white outline-none ring-1 ring-white/10 transition focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm md:text-base text-gray-300">Company Name</label>
              <input
                type="text"
                placeholder="Company name"
                className="rounded-2xl bg-gray-800 px-4 py-3 text-sm md:text-base text-white outline-none ring-1 ring-white/10 transition focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm md:text-base text-gray-300">Budget</label>
              <input
                type="text"
                placeholder="Project budget"
                className="rounded-2xl bg-gray-800 px-4 py-3 text-sm md:text-base text-white outline-none ring-1 ring-white/10 transition focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-sm md:text-base text-gray-300">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="rounded-2xl bg-gray-800 px-4 py-3 text-sm md:text-base text-white outline-none ring-1 ring-white/10 transition focus:ring-yellow-400"
              />
            </div>

            <div className="md:col-span-2 text-center">
              <button className="w-full md:w-auto bg-yellow-400 text-black px-8 py-3 rounded-3xl text-sm md:text-base font-semibold transition hover:bg-yellow-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
