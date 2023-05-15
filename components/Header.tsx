import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
    socials: Social[]
};

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
            className='flex flex-row items-center'
        >
            {/* SOCIAL ICONS */}
            { socials.map((social, i) =>
                <SocialIcon 
                    key={i}
                    url={social.url}
                    fgColor='grey'  
                    bgColor="transparent"
                    className='rounded-full ml-1 hover:bg-hoverbg' 
                />
            )}
        </motion.div>
        
        <Link href='#contact'>
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
                className='flex flex-row items-center cursor-pointer hover:bg-hoverbg hover:rounded-full'
            >
                <SocialIcon
                    network='email'
                    fgColor='gray' 
                    bgColor='transparent'
                    className='cursor-pointer pl-16'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400 md:mr-6'>
                    Get In Touch
                </p>
            </motion.div>
        </Link>
    </header>
  )
}