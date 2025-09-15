import React from "react";

const Work = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-around items-center md:items-start px-4 md:px-20 py-16 bg-[#384959] gap-8 md:gap-0">

      {/* Left Section */}
      <div className="w-full md:w-auto md:max-w-lg flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#88BDF2] mb-4 drop-shadow-md">
          Top Working Session 
        </h1>
        <p className="max-w-lg text-md mb-6 text-white text-justify leading-relaxed">
          Push your limits and redefine your strength with every session. Each
          rep brings you closer to your goals, reminding you that consistency is
          the true key to transformation. 
        </p>
        <img
          className="w-full md:w-[450px] h-[450px] md:h-[500px] object-cover rounded-3xl shadow-xl hover:scale-95 transition-transform duration-500 cursor-pointer"
          src="/img5.jpg"
          alt="A person engaged in a top working session"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-auto md:max-w-lg flex flex-col mt-8 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#88BDF2] mb-4 text-center md:text-left drop-shadow-md">
          Feature Bootcamp 
        </h1>
        <p className="text-white mb-8 max-w-md text-center md:text-left text-md">
          Explore our specialized bootcamp features designed to help you build
          strength, increase endurance, and achieve your fitness goals with
          expert guidance.
        </p>

        {/* Accordion Items */}
        <div className="space-y-4">
          <div className="collapse bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-[#6A89A7] font-semibold text-lg md:text-xl cursor-pointer">
              Strength Training
            </div>
            <div className="collapse-content text-gray-600 text-sm md:text-base">
              <p>Build muscle mass and boost endurance with expert-designed workouts.</p>
            </div>
          </div>

          <div className="collapse bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-[#6A89A7] font-semibold text-lg md:text-xl cursor-pointer">
              Cardio Blast
            </div>
            <div className="collapse-content text-gray-600 text-sm md:text-base">
              <p>Burn fat and increase stamina with high-intensity cardio sessions.</p>
            </div>
          </div>
          
          <div className="collapse bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-[#6A89A7] font-semibold text-lg md:text-xl cursor-pointer">
              Yoga & Flexibility
            </div>
            <div className="collapse-content text-gray-600 text-sm md:text-base">
              <p>Improve mobility, balance, and inner peace through guided yoga practices.</p>
            </div>
          </div>
          
          <div className="collapse bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-[#6A89A7] font-semibold text-lg md:text-xl cursor-pointer">
              Personal Coaching
            </div>
            <div className="collapse-content text-gray-600 text-sm md:text-base">
              <p>Get customized workout plans tailored to your fitness goals.</p>
            </div>
          </div>
          
          <div className="collapse bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-[#6A89A7] font-semibold text-lg md:text-xl cursor-pointer">
              HIIT Sessions
            </div>
            <div className="collapse-content text-gray-600 text-sm md:text-base">
              <p>Maximize calorie burn and improve cardiovascular fitness with high-intensity interval training.</p>
            </div>
          </div>
          
          <div className="collapse bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-[#6A89A7] font-semibold text-lg md:text-xl cursor-pointer">
              Nutrition Guidance
            </div>
            <div className="collapse-content text-gray-600 text-sm md:text-base">
              <p>Receive personalized meal plans and nutritional advice to complement your workouts.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;