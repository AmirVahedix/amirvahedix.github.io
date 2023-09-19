import Heading from "./Heading";
import OtherSkillsItem from "./Skills/OtherSkillsItem";
import SkillItem from "./Skills/SkillItem";

export default function Skills() {
  return (
    <div>
      <Heading title="What I Do?" badge="My skills" />
      <div className="flex flex-col items-center pb-10">
        <div className="w-11/12 lg:w-3/4 h-full flex items-center justify-around">
          <div className="flex flex-wrap w-full">
            <SkillItem title={"Laravel"} icon={"Shit"} percent={20} />
          </div>
        </div>
        <div className="mt-12 w-11/12 lg:w-3/4 px-4 md:px-10">
          <h5 className="text-xl font-bold">Other Skills:</h5>
          <div className="flex mt-4">
            <OtherSkillsItem title="Shit" />
          </div>
        </div>
      </div>
    </div>
  );
}
