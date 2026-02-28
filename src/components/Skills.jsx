import SkillsTable from "./SkillsTable";
const Skills = () => {
  return(
    <div className="flex pt-20">
      <div className="w-1/3"></div>
      <div className="mx-6 w-2/3">
        <h2 className="text-3xl font-semibold text-white text-right">Technical Skills</h2>
        <div className=" mt-2 h-[2px] bg-gray-600"></div>

        <SkillsTable/>
      </div>

    </div>
  )
}

export default Skills;