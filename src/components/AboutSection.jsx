import { useEffect, useState, useRef } from "react";
import { FaUser, FaHeart, FaGraduationCap } from "react-icons/fa";
import StoryContent from "./StoryContent";
import InterestContent from "./InterestContent";
import EducationContent from "./EducationContent";

const TABS = [
  { id: "story", label: "My Story", icon: <FaUser size={14} /> },
  { id: "interest", label: "Interest", icon: <FaHeart size={14} /> },
  { id: "education", label: "Education", icon: <FaGraduationCap size={14} /> },
];


const AboutSection = () => {
  const [actionTab, setActionTab] = useState("story");
  const isScrollLocked = useRef(false);
  const actionTabRef = useRef("story");

  const setTab = (id) => {
    actionTabRef.current = id;
    setActionTab(id);
  }

  useEffect(() => {
    const container = document.getElementById("about-container");
    if (!container) return;

    const handleScroll = (e) => {
      if (isScrollLocked.current) return; // ✅ check ก่อน preventDefault

      const currentIndex = TABS.findIndex((tab) => tab.id === actionTabRef.current);
      // ใช้ ref แทนเพื่อหลีกเลี่ยง stale closure ↓
      
      const isLast = currentIndex === TABS.length - 1;
      const isFirst = currentIndex === 0;

      // ถ้าอยู่ขอบและยังจะ scroll ต่อ → ปล่อยให้ snap ทำงาน
      if ((e.deltaY > 0 && isLast) || (e.deltaY < 0 && isFirst)) return;

      e.preventDefault(); // ✅ intercept เฉพาะตอนที่จะเปลี่ยน tab
      isScrollLocked.current = true;

      if (e.deltaY > 0) setTab(TABS[currentIndex + 1].id);
      else              setTab(TABS[currentIndex - 1].id);

      setTimeout(() => { isScrollLocked.current = false; }, 700);
    };

    container.addEventListener("wheel", handleScroll, { passive: false });
    return () => container.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div
      id="about-container"
      className="text-center mt-5 min-h-[400px] overflow-hidden"
    >
      {/* Tabs */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3  bg-gray-200 dark:bg-gray-800 p-2 rounded-xl">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActionTab(tab.id)}
              className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                      actionTab === tab.id
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                    }
                    `}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
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
