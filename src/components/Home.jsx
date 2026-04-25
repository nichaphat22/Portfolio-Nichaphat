import { IoLogoGithub, IoPersonSharp } from "react-icons/io5";
import { BsArrowRight, BsChevronDoubleDown } from "react-icons/bs";
const Home = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col">
        <div className="flex flex-col items-end m-30">
          <p className="text-7xl">
            Hi I'm <span className="uppercase text-6xl">nichaphat siribut</span>
          </p>
          <p className="text-2xl">Frontent | Backent | Fullstack Developer</p>

          <p className="mt-5 text-xl">
            Recent IT graduate with experience in building web applications
          </p>
        </div>

        <div className="mt-auto flex justify-center items-center gap-30 pb-5">
          <a href="https://github.com/nichaphat22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-900/50 rounded-xl shadow-lg hover:bg-white/10 hover:scale-105 transition duration-300 cursor-pointer">
            <IoLogoGithub /> GitHub <BsArrowRight />
          </a>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-white/30  dark:bg-gray-900/60 backdrop-blur-lg border border-gray-900/50 rounded-xl shadow-lg hover:bg-white/10 hover:scale-105 transition duration-300 cursor-pointer">
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
