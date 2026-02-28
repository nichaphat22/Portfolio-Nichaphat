import nsc from "/Certifications/nsclogo.png";
import itpe from "/Certifications/itpe.jpg";
const Certification = () => {
  return (
    <div className="pt-20 mx-32">
      <h2 className="text-3xl font-semibold">Certifications</h2>
      <div className=" mt-2 h-[1px] bg-white"></div>

      <div className="max-w-4xl mx-auto space-y-5 mt-5">
        <div className="flex gap-8  bg-gray-900 p-6 rounded-xl text-gray-300 h-48">
          <div className="w-1/3 flex items-center justify-center">
            <img src={itpe} alt="" className="max-h-full object-contain" />
          </div>

          <div className="w-2/3 flex flex-col">
            <p className="self-end">2024</p>
            <h2 className="text-xl font-bold">Information Technology Passport Examination (IP)</h2>
          </div>
        </div>

        <div className="flex gap-8  bg-gray-900 p-6 rounded-xl text-gray-300 h-48">
          <div className="w-1/3 flex items-center justify-center">
            <img src={nsc} alt="" className="max-h-full object-contain" />
          </div>

          <div className="w-2/3 flex flex-col">
            <p className="self-end">2024 </p>
            <p className="text-xl font-bold">National Software Contest (NSC) 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
