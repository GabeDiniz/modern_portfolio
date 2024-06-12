import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// type Props = {}

export default function ContactMe({}) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:gabriel.sundiniz@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center items-center max-w-7xl px-10 pb-28 mx-auto "
    >
      <h3 className="mt-10 uppercase tracking-[10px] text-gray-500 text-lg sm:text-2xl short:text-xl">
        {"<"}Contact Me{" />"}
      </h3>

      <div className="mt-6 sm:mt-10 short:mt-6 flex flex-col space-y-10">
        <h4 className="text-lg sm:text-2xl font-semibold text-center">
          I would love to get to know you.{" "}
          <span className="underline decoration-highlight/50">
            Want to chat?
          </span>
        </h4>

        <div className="text-md sm:text-2xl space-y-3 sm:space-y-8 short:space-y-4 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-highlight h-7 w-7 animate-pulse" />
            <p>289-380-3053</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-highlight h-7 w-7 animate-pulse" />
            <p>Kitchener/Waterloo</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-highlight h-7 w-7 animate-pulse" />
            <p>gabriel.sundiniz@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto w-fit"
        >
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="group relative bg-white/80 py-3 rounded-md overflow-hidden text-black font-bold text-lg"
          >
            <div className="absolute inset-0 w-0 bg-highlight transition-all duration-[300ms] ease-in group-hover:w-full"></div>
            <span className="relative">Send</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
}
