import profileAboutMe from "../assets/imgnini.jpg";
import { FiDownload } from "react-icons/fi";
import AboutSection from "./AboutSection";

const AboutMe = () => {
  return (
    
      <div className="pt-20 flex flex-col items-center px-4">
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl font-semibold dark:text-white text-center lg:text-right px-8 ">
          About Me
        </h2>
        <div className="mt-2 h-[1px] bg-gray-300 dark:bg-white/20 w-full"></div>

        <div className="flex flex-col lg:flex-row justify-between mx-4 md:mx-8 lg:mx-2.5 gap-8 mt-4">
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <img
              className="h-64 md:h-80 lg:h-96 rounded-3xl object-cover"
              src={profileAboutMe}
              alt="รูปโปรไฟล์"
            />
            <a
              href="https://drive.google.com/file/d/1kX9J9eOSImIr1k_PRsAQC1OdTP1mT2kT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm p-2 px-9 m-3 border rounded-xl cursor-pointer hover:bg-white/10 transition"
            >
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="w-full lg:w-2/3 mx-0 lg:mx-6">
            <div>
              <AboutSection />
            </div>
          </div>
        </div>
        </div>
        
      </div>
    
  );
};

export default AboutMe;
