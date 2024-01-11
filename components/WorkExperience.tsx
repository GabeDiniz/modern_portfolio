import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
// import experience from '../sanity/schemas/experience'

type Props = {
  experiences: Experience[];
};

export default function WorkExperienceBak({ experiences }: Props) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full  
        px-10 mx-auto items-center"
    >
      {/* absolute xl:top-24 md:top-20 */}
      <h3 className="uppercase mt-28 tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      {/* Accodion */}
      <div className="mt-5 bg-white text-black w-full rounded-xl py-4 px-5">
        <button
          className="flex w-full justify-between"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          <span>This is the title</span>
          {accordionOpen ? <span>-</span> : <span>+</span>}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-700 ease-in-out ${
            accordionOpen ? "opacity-100 max-h-52" : "opacity-0 max-h-0"
          }`}
        >
          <div className="overflow-hidden">Answer here</div>
        </div>
      </div>
      {/* <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 short:p-2 short:mt-4 snap-x snap-mandatory scrollbar-thin 
          scrollbar-track-gray-400/20 scrollbar-thumb-highlight/80"
      >
        {experiences?.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div> */}
    </motion.div>
  );
}
