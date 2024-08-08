import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24" id="nav">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <img
            src="/Sname.png"
            className="h-12 w-auto"
            alt="Logo"
          />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div className={`flex flex-col md:flex-row md:space-x-6 md:items-center ${isOpen ? "block" : "hidden"} md:block`}>
          <a href="#home" className="hover:text-gray-400 py-2 md:py-0">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 py-2 md:py-0">
            About Me
          </a>
          <a href="#services" className="hover:text-gray-400 py-2 md:py-0">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400 py-2 md:py-0">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 py-2 md:py-0">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/sadeek-ghimire-094192245/"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:hidden block text-center mt-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Connect Me
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/sadeek-ghimire-094192245/"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
