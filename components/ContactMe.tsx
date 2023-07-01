import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// type Props = {}

export default function ContactMe({}) {

    const { 
        register, 
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:gabriel.sundiniz@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    };

  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} 
        className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
            justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact Me
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I would love to get to know you. {" "}
                <span className='underline decoration-highlight/50'>Want to chat?</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-highlight h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>289-380-3053</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-highlight h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Kitchener/Waterloo</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-highlight h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>gabriel.sundiniz@gmail.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                    <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
                </div>

                <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />

                <textarea {...register('message')} className='contactInput' placeholder='Message'/>
                <button type="submit" className='bg-white/80 hover:bg-highlight/80 py-3 rounded-md text-black font-bold text-lg transition ease-in-out delay-100'>
                    Send
                </button>
            </form>
        </div>
    </motion.div>
  )
}