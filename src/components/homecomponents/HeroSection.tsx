

const HeroSection = () => {
  return (
    <section className="relative h-screen text-white overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videoplayback.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find the Perfect Tutor for Any Subject
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Search by subject, grade level, or tutor name.
        </p>

        
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl mb-8">
          <input
            type="text"
            placeholder="Search for subjects, grades, or tutors..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            Sign Up as a Student
          </button>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition">
            Register as a Tutor
          </button>
        </div>
      </div>
    </section>
    // <div className="relative w-full h-screen flex flex-col justify-end items-start overflow-hidden">
      
    //   <div>
    //     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-800 to-blue-900"></div>
    //     <video
    //       className="absolute top-0 left-0 w-full h-full object-cover"
    //       preload="none"
    //       autoPlay
    //       loop
    //       muted
    //     >
    //       <source src="/videoplayback.mp4" type="video/mp4" />
    //       <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
    //       Your browser does not support the video tag.
    //     </video>
    //   </div>

    //   <div className="absolute inset-0 bg-black/50"></div>


    //   <div className="relative p-10 z-10">
    //     <p className="text-xl text-white">Your Learning, Your Way</p>
    //     <h1 className="lg:text-9xl md:text-7xl text-5xl font-bold text-amber-200">
    //       Find Your Perfect Tutor Today!
    //     </h1>
    //     <div className="mt-6">
    //       <button className="border-2 hover:bg-blue-900 hover:border-transparent duration-200 py-4 px-8 rounded-full text-xl text-white">
    //         Join Now
    //       </button>
    //     </div>
    //   </div>
      
    // </div>
  );
};

export default HeroSection;
