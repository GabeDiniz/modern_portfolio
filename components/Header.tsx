import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    // Old spacing: max-w-7xl
    <header className="sticky top-0 p-5 flex items-start justify-between mx-12 z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center space-x-3"
      >
        {/* SOCIAL ICONS */}
        {socials.map((social, i) => (
          <SocialIcon
            key={i}
            url={social.url}
            fgColor="white"
            bgColor="transparent"
            className="rounded-full hover:bg-highlight transition ease-in-out duration-500"
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="flex flex-row items-center cursor-pointer hover:bg-highlight rounded-full transition ease-in-out duration-500"
        >
          <SocialIcon
            network="email"
            fgColor="white"
            bgColor="transparent"
            className="cursor-pointer pl-16"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-white md:mr-6">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
