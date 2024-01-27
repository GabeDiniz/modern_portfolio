import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../lib/sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      //  md:text-left md:flex-row
      className="flex flex-col mx-auto items-center relative h-screen text-center max-w-xl md:max-w-7xl px-10 "
    >
      <h3 className="mt-28 md:mt-24 xs:text-xl sm:text-2xl uppercase tracking-[20px] text-gray-500">
        About Me
      </h3>
      <h3 className="mt-4 text-xs sm:text-2xl text-center text-gray-500">
        Disclaimer: I am still working on this website so it is not fully
        responsive, YET ;)
      </h3>

      <div className="flex flex-col shorter:flex-row mx-auto shorter:m-20 items-center">
        <motion.img
          className="mt-5 flex-shrink-0 object-cover w-36 h-36 md:w-64 md:h-64 
            xl:w-[350px] xl:h-[350px] shorter:w-64 shorter:h-64 rounded-full"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          src={urlFor(pageInfo?.profilePic).url()}
        />

        <div className="space-y-5 sm:space-y-10 shorter:space-y-2 px-0 md:px-10 shorter:text-left">
          <h4 className="mt-5 text-md xs:text-2xl md:text-3xl font-semibold">
            Oh, hello there..
          </h4>
          <p className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-lg shorter:text-base">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
