import { useEffect, useState, useRef } from "react";
import { FaUser, FaHeart, FaGraduationCap } from "react-icons/fa";
import StoryContent from "./StoryContent";
import InterestContent from "./InterestContent";
import EducationContent from "./EducationContent";

const AboutSection = () => {
  const [actionTab, setActionTab] = useState("story");

  const tabs = [
    { id: "story", label: "My Story", icon: <FaUser size={14} /> },
    { id: "interest", label: "Interest", icon: <FaHeart size={14} /> },
    {
      id: "education",
      label: "Education",
      icon: <FaGraduationCap size={14} />,
    },
  ];

  const scrollLook = useRef(false);

useEffect(() => {
  const container = document.getElementById("about-container");
  if (!container) return;

  const handleScroll = (e) => {
    e.preventDefault();

    if (scrollLook.current) return;

    scrollLook.current = true;

    setActionTab((prev) => {
      const currentIndex = tabs.findIndex(
        (tab) => tab.id === prev
      );

      if (e.deltaY > 0) {
        if (currentIndex < tabs.length - 1) {
          return tabs[currentIndex + 1].id;
        }
      } else {
        if (currentIndex > 0) {
          return tabs[currentIndex - 1].id;
        }
      }

      return prev;
    });

    setTimeout(() => {
      scrollLook.current = false;
    }, 700);
  };

  container.addEventListener("wheel", handleScroll, {
    passive: false,
  });

  return () => {
    container.removeEventListener("wheel", handleScroll);
  };
}, []);

  return (
    <div id="about-container" className="text-center mt-5 h-[400px] overflow-hidden">
      {/* Tabs */}
      <div className="flex justify-center">
        <div className="flex gap-3 bg-gray-800 p-2 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActionTab(tab.id)}
              className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                      actionTab === tab.id
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-gray-300 hover:bg-gray-700"
                    }
                    `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 max-w-3xl mx-auto p-6 relative overflow-hidden">
        <div key={actionTab} className="animate-fade">
          {actionTab === "story" && <StoryContent />}
          {actionTab === "interest" && <InterestContent />}
          {actionTab === "education" && <EducationContent />}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
