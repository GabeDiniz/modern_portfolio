import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
// import experience from '../sanity/schemas/experience'

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  // Debugging
  // console.log(experiences);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full 
            px-10 justify-center mx-auto items-center"
    >
      {/* absolute xl:top-24 md:top-20 */}
      <h3 className="uppercase mt-20 md:mt-2 tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 short:p-2 short:mt-4 snap-x snap-mandatory scrollbar-thin 
          scrollbar-track-gray-400/20 scrollbar-thumb-highlight/80"
      >
        {experiences?.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
