import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen my-auto  overflow-hidden">
      {/* Background Image */}
      <img
        src="/img3.jpg"
        alt="Fitness Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col my-auto mt-55 justify-center ml-8 h-full  text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          LET&apos;S GET MOVING
        </h1>
        <p className="text-lg md:text-2xl mb-2">
          Your Journey to Fitness Starts Here
        </p>
        <p className="text-lg md:text-2xl text-blue-400 mb-10">Unleash Your Potential</p>

        <div className="space-x-4 mt-25 ">
          <button className="px-6 py-3 border-2 border-blue  bg-blue-500 text-black font-bold rounded-lg hover:bg-white/10 hover:text-blue-700 hover:cursor-pointer transition">
            Start Your Journey
          </button>
          <button className="px-6 py-3 border-2 border-blue text-blue-500 font-bold rounded-lg hover:bg-blue-700 hover:text-black hover:cursor-pointer transition">
            Discover Your Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
