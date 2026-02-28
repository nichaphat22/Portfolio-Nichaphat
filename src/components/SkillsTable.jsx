const SkillsTable = () => {
  const skills = [
    {label: "Programmer languages", logos:["/logos/HTML.jpg", "/logos/CSS.jpg", "/logos/javascript.png"] },
    {label: "Frontend", logos:["/logos/React-icon.svg.png", "/logos/TailwindCSS.jpg"] },
    {label: "Backend", logos:[ "/logos/express-js.jpg", "logos/Node_js.jpg"] },
    {label: "Database", logos:["/logos/MongoDB.jpg"] },
    {label: "Deployment", logos:["/logos/Railway.png", "/logos/netlify.png"] },
    {label: "Tools", logos:["/logos/GitHub.jpg", "/logos/Postman.png"] },
  ];
  return(
    <div className="max-w-4xl mx-auto mt-4 border border-gray-400 text-white">
      {skills.map((skills, index) => (
        <div 
          key={index}
          className="grid grid-cols-3 border-b border-gray-400"
          >
            {/* Left Colum */}
            <div className="border-r border-gray-400 p-6 text-sm">
              {skills.label}
            </div>

            {/* Right Colum */}
            <div className="col-span-2 flex items-center gap-6 p-6">
                {skills.logos.map((logo, i) => (
                  <img 
                    key={i}
                    src={logo} 
                    alt=""
                    className="w-10 h-10 rounded-3xl   object-contain hover:scale-110 transition duration-300" />
                ))}
            </div>

        </div>
      ))}
    </div>
  )
}

export default SkillsTable;