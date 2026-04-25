const items = [
  {
    title: "Interactive Denture Movement Learning Web Application – Khon Kaen University ",
    desc: "แพลตฟอร์มเรียนรู้ออนไลน์สำหรับทันตแพทย์ ด้วยสื่อ 3D แอนิเมชัน, AR และแบบทดสอบ",
    emoji: "🦷",
    tech: ["React", "Three.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Blender"],
    github: "https://github.com/nichaphat22/dental-movment.git",
    demo: "https://dental-movment.vercel.app/",
  },
  {
    title: "Full-Stack Authentication System",
    desc: "ระบบการลงทะเบียนและเข้าสู่ระบบ ด้วย Node.js, Express.js, MongoDB และ JWT พร้อมฟีเจอร์การรีเซ็ตรหัสผ่านผ่านอีเมล",
    emoji: "🔐",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt.js", "Passport.js", "Nodemailer"],
    github: "https://github.com/nichaphat22/mern-auth-system.git",
    demo: "https://niniauth.netlify.app",
  },
  {
    title: "Creative Frontend — 3D Interactive Website",
    desc: "เว็บไซต์อินเตอร์แอคทีฟแบบ 3D ด้วยเทคโนโลยี GSAP และ TailwindCSS",
    emoji: "🎨",
    tech: ["React", "Three.js", "GSAP", "TailwindCSS"],
    github: "https://github.com/nichaphat22/Apple-style-website-gsap.git",
    demo: "https://ephemeral-souffle-7127db.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="pt-20 flex flex-col items-center px-4">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-left">
          Featured Projects
        </h2>

        <div className="mt-2 h-[1px] bg-white/20 w-full"></div>

        {/* Scroll Container */}
        <div
          className="
            mt-8
            flex gap-6
            overflow-x-auto
            pb-4
            snap-x snap-mandatory
            scrollbar-hide
          "
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                min-w-[320px] max-w-[320px]
                bg-[#13131f]
                border border-white/10
                rounded-2xl
                p-6
                flex flex-col gap-4
                snap-center
                transition-all duration-300
                hover:-translate-y-2
                hover:border-violet-500/40
              "
            >
              {/* Emoji */}
              <div className="text-4xl">{item.emoji}</div>

              <h3 className="font-bold text-white">
                {item.title}
              </h3>

              <p className="text-xs text-white/50 line-clamp-3">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-1">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border border-violet-500/30 text-violet-300/90 bg-violet-500/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                <a className="text-xs px-3 py-1 rounded-lg bg-white/10">
                  <a href={item.github}>⌥ GitHub</a>
                </a>
                <a className="text-xs px-3 py-1 rounded-lg bg-violet-500/30">
                  <a href={item.demo}>↗ Demo</a>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
