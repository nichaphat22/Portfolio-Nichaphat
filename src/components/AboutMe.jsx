import profileAboutMe from "../assets/imgnini.jpg";
import { FiDownload } from "react-icons/fi";
import AboutSection from "./AboutSection";
const AboutMe = () => {
  return (
    <>
      <div className="min-h-screen pt-20 flex justify-between mx-2.5">
        <div className="w-1/3  flex flex-col items-center">
          <img
            className="h-96 rounded-3xl"
            src={profileAboutMe}
            alt="รูปโปรไฟล์"
          />
          <button className="flex items-center gap-2 text-sm p-2 px-9 m-3 border rounded-xl cursor-pointer"><FiDownload/> Download Resume</button>
        </div>
        <div className="mx-6 w-2/3 ">
          <h2 className="text-3xl font-semibold text-white text-right">
            About Me
          </h2>
          <div className=" mt-2 h-[2px] bg-gray-600"></div>

          <div>
            <AboutSection/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
