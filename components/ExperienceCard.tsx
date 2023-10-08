import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
// import exp from 'constants';

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const regex = /( [0-9]{2} )/i;
  // console.log(new Date(experience.dateStarted).toDateString().slice(4).replace(regex, " "))
  return (
    <article
      className="flex flex-col relative rounded-lg items-center space-y-7 flex-shrink-0 w-[600px] md:w-[710px] 
                    xl:w-[1100px] snap-center bg-bground p-10 hover:opacity-100 opacity-50 transition-opacity duration-200"
    >
      {/* Pink Overlay */}
      {/* <div className='w-full z-0 absolute bg-highlight/30 left-0 h-[150px] -skew-y-3'/> */}
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 z-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="relative md:px-10 flex flex-col">
        <h4 className="uppercase text-2xl md:text-3xl short:text-xl font-light self-center">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-2xl short:text-xl mt-1 self-center">
          {experience.company}
        </p>
        <div className="flex flex-wrap space-x-2 my-2 self-center">
          {/* Tech Used */}
          {experience.technologies.map(
            (technology, index) =>
              technology?.image && (
                <img
                  key={index}
                  className="h-10 w-10 short:h-6 short:w-6 rounded-full"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              )
          )}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted)
            .toDateString()
            .slice(4)
            .replace(regex, " ") + " - "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded)
                .toDateString()
                .slice(4)
                .replace(regex, " ")}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-xs md:text-sm lg:text-base short:text-xs">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
      {/* Pink Overlay */}
      {/* <div className='w-full absolute top-6 bg-highlight/10 left-0 h-[150px] -skew-y-3'/> */}
    </article>
  );
}
