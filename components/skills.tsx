"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-content-section";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills");
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Our Skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            className="dark:bg-white/10 dark:text-white/80 bg-white border border-black rounded-xl px-5 py-3"
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
