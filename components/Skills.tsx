import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import EachSkill from "./EachSkill";
import { Skill as SkillType } from "../typings";
// import { Tooltip } from "@nextui-org/react"

type Props = {
  skills: SkillType[];
};

// Define sort order map
const sortOrder: { [key: string]: number } = {
  Language: 1,
  Framework: 2,
  Tool: 3,
};

function Skills({ skills }: Props) {
  // Sorted Skills State
  const [sortedSkills, setSortedSkills] = useState<SkillType[]>([]);

  useEffect(() => {
    // Sort the skills by type using the sortOrder map for predefined order
    // console.log(skills);
    const sorted = [...skills].sort((a, b) => {
      return (sortOrder[a.type] || 0) - (sortOrder[b.type] || 0);
    });

    setSortedSkills(sorted);
  }, [skills]); // Dependency ensures this effect runs any time the skills prop changes

  // console.log(sortedSkills);
  // Sort Skills by proficiency
  // skills.sort((p1, p2) =>
  //   p1.progress < p2.progress ? 1 : p1.progress > p2.progress ? -1 : 0
  // );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center md:text-left max-w-[2000px] xl:px-10 mx-auto items-center"
    >
      <h3 className="uppercase mb-2 tracking-[10px] text-gray-500 text-2xl">
        {"<"}Skills{"/>"}
      </h3>
      <h3 className="uppercase mb-6 2xl:mb-14 tracking-[3px] text-gray-500 text-sm px-5 md:px-0">
        Here are the skills I am proficient in
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 sm:gap-5 mt-10">
        {skills?.map((skill, i) => (
          <EachSkill key={i} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
