import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white w-full h-screen overflow-hidden flex items-center px-4">

      {/* Wrapper centered with right offset to account for sidebar */}
      <div className="max-w-2xl mx-auto" style={{ paddingRight: '96px' }}>

        <div className="mb-10 flex justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold inline-flex flex-wrap justify-center gap-2 pb-2">
              <span>Contact</span>
              <span className="text-yellow-400">Me</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[3px] bg-yellow-400 mt-2 origin-left"
            />
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <form className="grid grid-cols-2 gap-4">

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Full Name</label>
              <input type="text" placeholder="Enter your name"
                className="p-2.5 rounded bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Email</label>
              <input type="email" placeholder="Enter your email"
                className="p-2.5 rounded bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Phone Number</label>
              <input type="tel" placeholder="Enter phone number"
                className="p-2.5 rounded bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Subject</label>
              <input type="text" placeholder="Project subject"
                className="p-2.5 rounded bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Company Name</label>
              <input type="text" placeholder="Company name"
                className="p-2.5 rounded bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Budget</label>
              <input type="text" placeholder="Project budget"
                className="p-2.5 rounded bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div className="flex flex-col col-span-2">
              <label className="mb-1 text-sm text-gray-300">Message</label>
              <textarea rows="3" placeholder="Write your message..."
                className="p-2.5 rounded bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            </div>

            <div className="col-span-2 text-center mt-2">
              <button className="bg-yellow-400 text-black px-8 py-2.5 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition">
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
