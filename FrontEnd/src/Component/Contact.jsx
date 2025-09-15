import React, { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.post("http://localhost:4000/send/mail",{
        name,email,message,
      },{
        withCredentials: true,
        headers : {"Content-Type": "application/json"}
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center sm:justify-end px-4 sm:px-6 md:px-16 py-12">
      {/* Background Image */}
      <img
        src="/contact.jpg"
        alt="Contact"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Contact Form Box */}
      <div className="relative z-10 w-full sm:w-[480px] md:w-[550px] bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-6 sm:p-8">
        <h1 className="text-[#2B2B2B] text-2xl sm:text-3xl font-extrabold mb-6 text-center">
          CONTACT US
        </h1>

        <form action="" onSubmit={sendMail} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-[#2B2B2B] font-semibold text-base mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              placeholder="Enter your name"
              className="border-b-2 border-gray-400 bg-transparent focus:border-[#6A89A7] outline-none p-2 text-[#2B2B2B] placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[#2B2B2B] font-semibold text-base mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border-b-2 border-gray-400 bg-transparent focus:border-[#6A89A7] outline-none p-2 text-[#2B2B2B] placeholder-gray-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-[#2B2B2B] font-semibold text-base mb-1">
              Message
            </label>
            <textarea
              rows={message.length > 80 ? 3 : 1} // grows when text increases
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="border-b-2 border-gray-400 bg-transparent focus:border-[#6A89A7] outline-none p-2 text-[#2B2B2B] placeholder-gray-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2B2B2B] text-white py-2 rounded-lg font-semibold hover:bg-[#6A89A7] transition-colors duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
