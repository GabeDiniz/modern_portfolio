import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import Accordion from "./Accordion";
// import experience from '../sanity/schemas/experience'

type Props = {
  experiences: Experience[];
};

export default function WorkExperienceBak({ experiences }: Props) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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
      <div className="">
        {experiences?.map((experience, index) => (
          <Accordion
            key={index}
            title={`Accordion ${index + 1}`}
            isOpen={openAccordion === index}
            onClick={() => handleAccordionClick(index)}
          >
            <div className="overflow-hidden">
              Content for Accordion {index + 1}
            </div>
          </Accordion>
        ))}
      </div>
    </motion.div>
  );
}
