import React from "react";
import { Experience } from "../typings";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: any;
  experience: Experience;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  isOpen,
  onClick,
  children,
  experience,
}) => {
  return (
    <div className="bg-white text-black w-full rounded-xl py-4 px-5 mb-2">
      <button className="flex w-full justify-between" onClick={onClick}>
        <span>{title}</span>
        {isOpen ? <span>-</span> : <span>+</span>}
      </button>
      {isOpen && (
        <div className="transition-all duration-500 ease-in-out">
          {experience.jobTitle}
        </div>
      )}
    </div>
  );
};

export default Accordion;
