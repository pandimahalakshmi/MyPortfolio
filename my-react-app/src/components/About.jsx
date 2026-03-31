function About() {
  return (
    
    <section id="about" className="w-full min-h-screen p-20 bg-black text-white">

      <div className="flex justify-center">
        <h2 className="text-4xl font-bold border-b-2 border-yellow-400 pb-2 transition-all duration-500">
          <span>ABOUT</span> <span className="text-yellow-400">ME</span>
        </h2>
      </div>

     <h3 className="text-2xl text-yellow-400  font-bold pl-52 py-10">PERSONAL INFO</h3>
     <div className="grid grid-cols-2 pl-52">
    <div className="flex flex-col  ">
     <div className="flex gap-3 pt-10">
      <p className="text-gray-300">Name : </p>
      <p> Pandi Mahalakshmi </p>
     </div>
     <div className="flex gap-3 pt-4">
      <p className="text-gray-300">Age : </p>
      <p>22</p>
     </div>
     <div className="flex gap-3  pt-4">
      <p className="text-gray-300">Nationality  : </p>
      <p>Indian</p>
     </div>
     <div className="flex gap-3  pt-4">
      <p className="text-gray-300">Address  : </p>
      <p>Kovilpatti,TamilNadu</p>
     </div>
      <div className="flex gap-3  pt-4">
      <p className="text-gray-300">Phone  : </p>
      <p>9597487751</p>
     </div>
     </div>
     <div className="flex flex-col">
     <div className="flex gap-3 pt-10">
      <p className="text-gray-300">Email : </p>
      <p> pandimahalakshmi5@gmail.com </p>
     </div>
     <div className="flex gap-3 pt-4">
      <p className="text-gray-300">LinkedIn : </p>
       <a
    href="https://linkedin.com/in/mahalakshmi19"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-yellow-400"
  >  mahalakshmi19</a>
     </div>
     <div className="flex gap-3  pt-4">
      <p className="text-gray-300">GitHub  : </p>
      <a
    href="https://github.com/pandimahalakshmi"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-yellow-400"
  >pandimahalakshmi</a>
     </div>
     <div className="flex gap-3  pt-4">
      <p className="text-gray-300">Language  : </p>
      <p>Tamil , English</p>
     </div>
      
     </div>
     </div>

    </section>
   
  )
}

export default About