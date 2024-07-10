import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-2">
      <div className="mx-auto flex flex-col items-center justify-between ">
        <div className="flex flex-wrap justify-center items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/omm-bhavsar/"
            className="text-xl font-semibold"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.youtube.com/@ActuallyOmm"
            className="text-xl font-semibold"
          >
            <FaYoutube className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/ActuallyOmm"
            className="text-xl font-semibold"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">&copy;2024 Omm Bhavsar</p>
      </div>
    </footer>
  );
}
export default Footer;
