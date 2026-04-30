import React from "react";
import { FaGithub, FaLinkedin, FaVoicemail } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Certification", href: "#certification" },
  { label: "Contact", href: "#contact" },
];

const builtWith = ["React", "Tailwind CSS", "Vite", "EmailJS"];

const Footer = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-30 flex flex-col mx-2.5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-lg text-center md:text-4xl ">
          Let's Build Something Amazing Together
        </h1>
        <h2 className="text-xs md:text-lg">
          Have a project in mind? Let's connect and make it happen!
        </h2>

        <div className="flex flex-col md:flex-row  mt-8 gap-4 md:gap-12 md:mt-14">
          <a
            href="#contact"
            className="flex items-center justify-center p-4 rounded-xl   md:w-52 btn"
          >
            get in touch
          </a>
          <a
            href=""
            className="flex items-center justify-center  p-4 rounded-xl md:w-52 btn"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center md:grid-cols-4 md:justify-center gap-8 px-4 py-10 md:px-8 border-b border-gray-300 dark:border-white/10">
        <div className="col-span-2 md:col-span-1">
          <p className="uppercase font-bold text-lg tracking-wide">
            Nichaphat Siribut
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Frontend | Backend | Fullstack
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Quick Links
          </p>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Built with */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Built with
          </p>
          <ul className="flex flex-col gap-2">
            {builtWith.map((tech) => (
              <li key={tech} className="text-sm text-gray-400">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Connect
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/nichaphat22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 btn rounded-xl hover:text-white hover:bg-gray-800 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/nichaphat22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 btn rounded-xl hover:text-white hover:bg-gray-800 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:nichaphat.siribut22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 btn rounded-xl hover:text-white hover:bg-gray-800 transition"
            >
              <HiOutlineMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-auto pt-5">
        <p className="text-xs pb-2">
          &copy; NICHAPHAT SIRIBUT. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
