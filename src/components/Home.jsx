import { IoLogoGithub, IoPersonSharp } from "react-icons/io5";
import { BsArrowRight, BsChevronDoubleDown } from "react-icons/bs";
const Home = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col">

        <div className="flex flex-col items-center md:items-end m-6 md:m-16 lg:m-30 mt-24 md:mt-30">

          <p className="text-4xl md:text-6xl lg:text-7xl text-center md:text-right">
            Hi I'm {" "}
            <span className="uppercase text-3xl md:text-5xl lg:text-6xl">nichaphat siribut</span>
          </p>

          <p className="text-lg md:text-2xl text-center md:text-right mt-1">Frontent | Backent | Fullstack Developer</p>

          <p className="mt-5 text-base md:text-xl text-center md:text-right max-w-md">
            Recent IT graduate with experience in building web applications
          </p>
        </div>

        <div className="mt-auto flex justify-center items-center gap-4 md:gap-10 lg:gap:30 pb-5 flex-wrap px-4">
          <a href="https://github.com/nichaphat22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-900/50 rounded-xl shadow-lg hover:bg-white/10 hover:scale-105 transition duration-300 cursor-pointer">
            <IoLogoGithub /> GitHub <BsArrowRight />
          </a>

          <a href="https://drive.google.com/file/d/1kX9J9eOSImIr1k_PRsAQC1OdTP1mT2kT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-white/30  dark:bg-gray-900/60 backdrop-blur-lg border border-gray-900/50 rounded-xl shadow-lg hover:bg-white/10 hover:scale-105 transition duration-300 cursor-pointer">
            <IoPersonSharp /> Resume <BsArrowRight />
          </a>
        </div>

        <div className="mb-10 flex justify-center items-center cursor-pointer" onClick={() => {
          document.getElementById("about").scrollIntoView({
            behavior: "smooth",
          })
        }}>
          <BsChevronDoubleDown />
        </div>
      </section>
    </>
  );
};

export default Home;
