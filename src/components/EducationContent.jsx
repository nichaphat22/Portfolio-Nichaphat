const EducationContent = () => {
  return (
    <div className="border-l-2 border-indigo-500 pl-6 space-y-6 text-left ">
      <div className="flex items-center gap-4">
        <img
          src="/logos/kku-logo.png"
          alt="KKU"
          className="w-auto h-14 shrink-0"
        />
        <div>
          <h4 className="font-semibold text-sm md:text-base">
            Bachelor of Science (Information Technology){" "}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Khon Kaen University
          </p>
          <p className="text-xs text-indigo-500 mt-1">
            Second Class Honors (GPA: 3.38){" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
