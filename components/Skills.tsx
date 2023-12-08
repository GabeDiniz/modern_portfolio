import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
// import { Tooltip } from "@nextui-org/react"

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  // Sort Skills by proficiency
  skills.sort((p1, p2) =>
    p1.progress < p2.progress ? 1 : p1.progress > p2.progress ? -1 : 0
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-center md:text-left max-w-[2000px] 
        xl:px-10 min-h-screen mx-auto items-center"
    >
      <h3 className="uppercase mt-28 mb-2 tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="uppercase mb-6 2xl:mb-14 tracking-[3px] text-gray-500 text-sm px-5 md:px-0">
        Hover over a skill to see what it is and my proficiency
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 sm:gap-5 mt-10">
        {skills?.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
