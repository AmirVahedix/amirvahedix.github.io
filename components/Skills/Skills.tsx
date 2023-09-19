import Heading from "../Heading";
import OtherSkillsItem from "./OtherSkillsItem";

import { SiFlutter } from "react-icons/si";
import SkillItem from "./SkillItem";
import { FaLaravel, FaPython, FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <div>
      <Heading title="What I Do?" badge="My skills" />
      <div className="flex flex-col items-center pb-10">
        <div className="w-11/12 lg:w-3/4 h-full flex items-center justify-around">
          <div className="flex flex-wrap w-full">
            <SkillItem
              title="Laravel"
              icon={<FaLaravel />}
              color="#FF2716"
              percent={80}
            />
            <SkillItem
              title="NextJS / React"
              icon={<FaReact />}
              color="#149ECA"
              percent={70}
            />
              <SkillItem
                title="Flutter"
                icon={<SiFlutter />}
                color="#5AC2F0"
                percent={65}
              />
            <SkillItem
              title="Python"
              icon={<FaPython />}
              color="#386E9D"
              percent={55}
            />
          </div>
        </div>
        <div className="mt-12 w-11/12 lg:w-3/4 px-4 md:px-10">
          <h5 className="text-xl font-bold">Other Skills:</h5>
          <div className="flex mt-4">
            <OtherSkillsItem title="Linux" />
            <OtherSkillsItem title="Git" />
            <OtherSkillsItem title="TDD" />
            <OtherSkillsItem title="Numpy" />
            <OtherSkillsItem title="Pandas" />
            <OtherSkillsItem title="Matplotlib" />
            <OtherSkillsItem title="Scikit-Learn" />
          </div>
        </div>
      </div>
    </div>
  );
}
