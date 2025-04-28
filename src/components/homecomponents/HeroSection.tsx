

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-end items-start overflow-hidden">
      
      <div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-800 to-blue-900"></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          preload="none"
          autoPlay
          loop
          muted
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
          <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative p-10 z-10">
        <p className="text-xl text-white">Your Learning, Your Way</p>
        <h1 className="lg:text-9xl md:text-7xl text-5xl font-bold text-amber-200">
          Find Your Perfect Tutor Today!
        </h1>
        <div className="mt-6">
          <button className="border-2 hover:bg-blue-900 hover:border-transparent duration-200 py-4 px-8 rounded-full text-xl text-white">
            Join Now
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
