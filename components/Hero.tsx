// import Image from 'next/image';
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
  const [text, count] = useTypewriter({
    words: [
      "Hello! My name is Gabe...",
      "import { Coffee } from 'Keurig'",
      "<EatCodeSleepRepeat />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="relative">
        <BackgroundCircles />
      </div>
      {/* WORKING */}
      <div className="relative h-64 w-64 max-w-full rounded-full border-2 border-neutral/50 shadow-2xl overflow-hidden animatecss animatecss-backInUp animatecss-delay-2s">
        <img
          className="absolute inset-0 w-full h-full object-cover "
          src={urlFor(pageInfo.heroImage).url()}
          alt=""
        />
      </div>
      {/* TESTING */}
      {/* <div className='relative h-64 w-64 max-w-full bg-cover overflow-hidden'>
                <img className='asbolute inset-0 w-full h-full object-cover' src='blobW.png' alt=''/>
                <img className='mix-blend-screen absolute inset-0 w-full h-full object-cover' src={urlFor(pageInfo.heroImage).url()} alt=''/>
            </div> */}
      <div className="z-20">
        {/* Job Role */}
        <h2 className="text-md font-bold uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        {/* Typewriter */}
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
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
          <Link href="#skills" className="px-1">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects" className="px-1">
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
