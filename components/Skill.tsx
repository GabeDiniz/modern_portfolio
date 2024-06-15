import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../lib/sanity";

type Props = {
  skill: Skill;
  // directionLeft?: boolean;
};

function EachSkill({ skill }: Props) {
  return (
    <div className="group relative flex">
      <motion.img
        initial={{
          x: 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-14 h-14 xs:w-20 xs:h-20 xl:w-24 xl:h-24 p-1 transition duration-300 ease-in-out"
      />
      {/* Media Queries: md:w-28 md:h-28 xl:w-28 xl:h-28 */}
      <div
        className="absolute opacity-0 transition duration-500 ease-in-out
        w-14 h-14 xs:w-20 xs:h-20 xl:w-24 xl:h-24 rounded-full z-0"
      >
        <div
          className="flex items-center justify-center h-full"
          title={skill.title}
        >
          {/* <p className="text-xl sm:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default EachSkill;
