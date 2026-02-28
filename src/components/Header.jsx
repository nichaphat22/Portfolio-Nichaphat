import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import {IoSunnySharp, IoMoon} from "react-icons/io5";
const Header = ({theme, setTheme, activeSection}) => {
  // const isDark = activenSection === "home";
  const [isOpen, setIsOpen] = useState(false);

  function toggleTheme(){
    if(theme === "light"){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }


  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  const menus = [
    {label: "Home", id: "home"},
    {label: "About Me", id: "about"},
    {label: "Project", id: "project"},
    {label: "Skills", id: "skills"},
    {label: "Certification", id: "certification"},
    {label: "Contact", id: "contact"}
  ]
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-950 shadow-md dark:border-b backdrop-blur-xl transition-all duration-700 ${
      activeSection === "home"
        ? "bg-transparent text-white"
        : "bg-white/70 dark:bg-gray-950/70 text-black dark:text-white shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="text-2xl font-bold text-gray-800 uppercase dark:text-white">
            nichaphat siribut
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-16">
            {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => scrollTo(menu.id)}
              className={`
                relative text-base tracking-wide font-light transition-all duration-300 cursor-pointer ${
                  activeSection === menu.id 
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-100"
                }`}
            >{menu.label}
            <span
              className={`
                absolute left-0 -bottom-1 h-[1px] w-full bg-current transition-all duration-500 ${
                  activeSection === menu.id
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}/>
            </button>
          ))}
          
          </div>

          <div className="hidden md:flex cursor-pointer" onClick={toggleTheme}>
            {theme === "light" ? <IoSunnySharp size={25}/> : <IoMoon size={25}/>}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white"
            >
              <RxHamburgerMenu size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl px-6 pb-4 space-y-4">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => {
                scrollTo(menu.id);
                setIsOpen(false);
              }}
              className={`
                block w-full text-left transition-all duration-300 ${
                  activeSection === menu.id
                  ? "opacity-100 font-medium"
                  : "opacity-60"
                }
                `}
            >
              {menu.label}
            </button>
          ))}
          
          <div onClick={toggleTheme} className="block text-gray-600 dark:text-gray-300">
            {theme === "light" ? <IoSunnySharp size={25}/> : <IoMoon size={25}/>}
          </div>

          
        </div>
        
      )}
    </nav>
  );
};

export default Header;
