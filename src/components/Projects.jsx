const Projects = () => {
  return (
    <div className="pt-20 mx-32">
      <h2 className="text-3xl font-semibold">Featured Projects</h2>
      <div className=" mt-2 h-[1px] bg-white"></div>

      <div className="relative w-[900px] h-72 mx-auto mt-20">
          {/* Back Card */}
          <div className="absolute right-0 top-1 w-96 h-[280px] bg-gray-200 rounded-xl shadow-lg">

          </div>

          {/* Front Card */}
          <div  className="absolute left-0 top-5 w-[550px] h-[230px] 
                  bg-gray-800 text-white rounded-xl shadow-2xl 
                  p-6 ">

          </div>
      </div>
    </div>
  );
};

export default Projects;
