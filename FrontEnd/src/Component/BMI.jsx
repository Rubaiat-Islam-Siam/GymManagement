import React, { useState } from "react";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState(""); // <-- New state for messages

  const bmiCalculate = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      setMessage(" Please enter HEIGHT, WEIGHT & select GENDER");
      return;
    }

    const hm = height / 100;
    const bmiValue = (weight / (hm * hm)).toFixed(2);
    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setMessage(
        "You are underweight. Consider seeking advice from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setMessage("You have a normal weight. Keep maintaining a healthy lifestyle!");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setMessage(
        "You are overweight. Consider lifestyle adjustments and advice from a healthcare provider."
      );
    } else {
      setMessage("You are in the obese range. Please consult a healthcare specialist.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-20 py-12 bg-gradient-to-r from-[#0A0A2A] via-[#14143F] to-[#1E1E5C]">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#8686AC] mb-12 drop-shadow-lg">
        BMI CALCULATOR
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Left Section - Form */}
        <div className="bg-white/20 backdrop-blur-xl shadow-xl rounded-2xl p-10 w-full md:w-[480px] flex flex-col justify-center h-[450px]">
          <form onSubmit={bmiCalculate} className="space-y-5">
            {/* Height */}
            <div className="flex flex-col">
              <label className="text-white font-semibold text-base mb-1">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="border-b-2 border-gray-300 bg-transparent focus:border-[#6A89A7] outline-none p-2 text-white placeholder-gray-300"
              />
            </div>

            {/* Weight */}
            <div className="flex flex-col">
              <label className="text-white font-semibold text-base mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="border-b-2 border-gray-300 bg-transparent focus:border-[#6A89A7] outline-none p-2 text-white placeholder-gray-300"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col relative">
              <label className="text-white font-semibold text-base mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="appearance-none border-b-2 border-gray-300  backdrop-blur-md text-white p-2 pr-8 rounded-lg focus:outline-none focus:border-[#8686AC]"
              >
                <option value="" className="text-black">Select Gender</option>
                <option value="Male" className="text-black">Male</option>
                <option value="Female" className="text-black">Female</option>
                <option value="Other" className="text-black">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-[#2B2B2B] text-white py-2 rounded-lg font-semibold hover:bg-[#6A89A7] transition-colors duration-300 shadow-md"
              >
                Calculate BMI
              </button>
            </div>
          </form>

          {/* BMI Result */}
          {bmi && (
            <div className="mt-6 text-center text-lg font-bold text-white">
              <p>
                Your BMI: <span className="text-[#5C8DC5]">{bmi}</span>
              </p>
              <p className="mt-2 text-sm  text-[#57B9FF] font-bold">{message}</p>
            </div>
          )}
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-[550px] flex justify-center">
          <img
            src="/bmi.jpg"
            alt="BMI Illustration"
            className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BMI;
