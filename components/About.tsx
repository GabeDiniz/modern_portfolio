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
      className="flex flex-col mx-auto items-center text-center max-w-xl md:max-w-7xl px-10 space-y-6"
    >
      <h3 className="mt-28 md:mt-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About Me
      </h3>
      <h3 className="text-xs md:text-lg text-center text-gray-500">
        Disclaimer: I am still working on this website so it is not fully
        responsive, YET ;)
      </h3>

      <div className="flex flex-col xl:flex-row xl: xl:translate-y-1/4 mx-auto items-center">
        <motion.img
          className="object-cover w-32 h-32 md:w-56 md:h-56 xl:w-[350px] xl:h-[350px] rounded-full"
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

        <div className="space-y-5 sm:space-y-4 px-0 md:px-10 xl:flex xl:flex-col xl:items-start">
          <h4 className="mt-5 xl:mt-0 text-md xs:text-2xl md:text-3xl font-semibold">
            Oh, hello there..
          </h4>
          <p className="text-xs xs:text-sm sm:text-lg md:text-lg lg:text-lg overflow-hidden xl:text-left">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
