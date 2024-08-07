import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyImage from "../assets/sadik.png";
const Home = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (downloaded) {
      toast.warn("You have already downloaded the resume.");
      return;
    }

    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure your resume file is in the public directory
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    toast.success("Resume downloaded successfully!");
  };
  return (
    <div className="bg-black text-white text-center py-16" id="home">
      <img
        src={MyImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Sadik Ghimire
        </span>
        ,Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="#contact"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact with me
        </a>
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
