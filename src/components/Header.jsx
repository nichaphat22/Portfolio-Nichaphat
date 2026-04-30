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

  const isHome = activeSection === "home";
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50  backdrop-blur-xl transition-all duration-700 border-b ${
      isHome
        ? "bg-transparent border-transparent text-white"
        : "bg-white/70 dark:bg-gray-950/70 border-gray-200 dark:border-gray-800 text-black dark:text-white shadow-sm"
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
                relative text-sm tracking-wide font-light transition-all duration-300 cursor-pointer ${
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

           {/* Theme toggle — Desktop */}
          {/* ✅ แสดงไอคอนตรงกับ theme ปัจจุบัน */}
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
      <div className={`md:hidden overflow-hidden transition-all duration-300
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl px-6 pb-4 pt-2 space-y-3">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => { scrollTo(menu.id); setIsOpen(false); }}
              className={`block w-full text-left py-1 transition-all duration-300
                ${activeSection === menu.id ? "opacity-100 font-medium" : "opacity-60"}`}
            >
              {menu.label}
            </button>
          ))}

          {/* Theme toggle — Mobile */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition pt-1"
          >
            {theme === "dark"
              ? <><IoSunnySharp size={20} /> Light mode</>
              : <><IoMoon size={20} /> Dark mode</>
            }
          </button>
        </div>
      </div>
        
    
    </nav>
  );
};

export default Header;
