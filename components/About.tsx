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
      className="flex flex-col relative h-screen text-center max-w-7xl px-10 sm:justify-evenly mx-auto items-center"
    >
      <h3 className="mt-20 text-sm sm:text-2xl uppercase tracking-[20px] text-gray-500 ">
        About Me
      </h3>
      <h3 className="text-xs sm:text-2xl text-center text-gray-500">
        Disclaimer: I am still working on this website so it is not fully
        responsive, YET ;)
      </h3>

      <motion.img
        className="mt-5 md:mb-0 flex-shrink-0 object-cover
        w-28 h-28 md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px] lg:rounded-3xl rounded-full"
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

      <div className="space-y-5 sm:space-y-10 px-0 md:px-10">
        <h4 className="mt-5 text-md sm:text-4xl font-semibold">
          Oh, hello there..
        </h4>
        <p className="text-xs md:text-sm lg:text-lg">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
