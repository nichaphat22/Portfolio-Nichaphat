import nsc from "/Certifications/nsclogo.png";
import itpe from "/Certifications/itpe.jpg";

const certifications = [
  {
    img: itpe,
    year: "2024",
    title: "Information Technology Passport Examination (IP)",
  },
  {
    img: nsc,
    year: "2024",
    title: "National Software Contest (NSC) 2024",
  },
];
const Certification = () => {
  return (
    <div className="pt-20 mx-4 md:mx-16 lg:mx-32">
      <h2 className="text-3xl font-semibold">Certifications</h2>
      <div className=" mt-2 h-[1px] bg-gray-300 dark:bg-white/20 w-ful"></div>

      <div className="max-w-4xl mx-auto space-y-5 mt-5">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 bg-gray-100 dark:bg-gray-900 p-5 sm:p-6 rounded-xl "
          >
            <div className="w-full sm:w-1/3 flex items-center justify-center">
              <img
                src={cert.img}
                alt={cert.title}
                className="h-24 sm:h-32 object-contain"
              />
            </div>

            <div className="w-full sm:w-2/3 flex flex-col">
              <p className="text-sm text-gray-400 sm:self-end">{cert.year}</p>
              <h2 className="text-base sm:text-xl font-bold mt-1">{cert.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
