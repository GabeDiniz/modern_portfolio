import React, { useEffect, useState } from "react";
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

  const [viewSummary, setViewSummary] = useState(true);

  function checkSize() {
    if (
      (window.innerWidth < 700 && window.innerHeight < 950) ||
      (window.innerWidth > 700 && window.innerHeight < 970)
    ) {
      setViewSummary(true);
    } else {
      setViewSummary(false);
    }
  }
  useEffect(() => {
    checkSize();
    function handleResize() {
      checkSize(); // Call checkSize to update viewSummary when the window is resized
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <article
      className="flex flex-col relative rounded-lg items-center space-y-7 flex-shrink-0 w-[110%] xs:w-[95%] md:w-[710px] 
        xl:w-[1100px] xs:snap-center bg-bground p-10 hover:opacity-100 opacity-50 transition-opacity duration-200"
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
      <div className="flex flex-col relative md:px-10 ">
        <h4 className="uppercase text-lg sm:text-2xl md:text-3xl short:text-xl font-light self-center text-center">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-xl sm:text-2xl short:text-xl mt-1 self-center">
          {experience.company}
        </p>
        <div className="flex flex-wrap space-x-2 my-2 self-center justify-center">
          {/* Tech Used */}
          {experience.technologies.map(
            (technology, index) =>
              technology?.image && (
                <img
                  key={index}
                  className="h-6 w-6 sm:h-10 sm:w-10 short:h-6 short:w-6 rounded-full mb-1 sm:mb-0"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              )
          )}
        </div>
        <p className="uppercase py-5 text-gray-300 self-center">
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
        {viewSummary ? (
          <p className="text-sm">
            To view the job summary, please open this website on a larger device
            or zoom out...
          </p>
        ) : (
          <ul className="list-disc space-y-4 ml-5 text-xs md:text-sm lg:text-base short:text-xs">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>
      {/* Pink Overlay */}
      {/* <div className='w-full absolute top-6 bg-highlight/10 left-0 h-[150px] -skew-y-3'/> */}
    </article>
  );
}
