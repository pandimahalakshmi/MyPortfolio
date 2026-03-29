function Contact() {
  return (
    <section id="contact" className="mr-20 bg-gray-900 text-white p-20">

      <h2 className="text-center text-5xl font-bold mb-16">
        Contact <span className="text-yellow-400">Me</span>
      </h2>

      <div className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-xl shadow-lg">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Full Name</label>
            <input type="text" placeholder="Enter your name"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Email</label>
            <input type="email" placeholder="Enter your email"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Phone Number</label>
            <input type="tel" placeholder="Enter phone number"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Subject</label>
            <input type="text" placeholder="Project subject"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Company Name</label>
            <input type="text" placeholder="Company name"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-300">Budget</label>
            <input type="text" placeholder="Project budget"
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-gray-300">Message</label>
            <textarea rows="4" placeholder="Write your message..."
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-6">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Send Message
            </button>
          </div>

        </form>

      </div>

    </section>
  );
}

export default Contact;