/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../lib/sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      "Hello! My name is Gabe...",
      "import { Coffee } from 'Keurig'",
      "<EatCodeSleepRepeat />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen w-full flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="relative flex justify-center items-center -mt-6 lg:mt-5">
        <BackgroundCircles />
        <img
          className="h-64 w-64 object-cover rounded-full border-2 border-neutral/50 animatecss animatecss-backInUp animatecss-delay-2s"
          src={urlFor(pageInfo.heroImage).url()}
          alt="profile-picture"
        />
      </div>
      <div className="z-20">
        {/* Job Role */}
        <h2 className="text-sm sm:text-xl uppercase text-gray-500 pb-2 tracking-[8px] sm:tracking-[15px]">
          {pageInfo.role}
        </h2>
        {/* Typewriter */}
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          {/* Color has to be Hexcode */}
          <Cursor cursorColor="#d83f87" />
        </h1>
        {/* Directory */}
        <div className="pt-5">
          <Link href="#about" className="px-1">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience" className="px-1">
            <button className="heroButton">Experience</button>
          </Link>
          {/* <Link href="#skills" className="px-1">
            <button className="heroButton">Skills</button>
          </Link> */}
          <Link href="#projects" className="px-1">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
