"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-content-section";

const About = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <p className="mb-3">
        At The Cube Agency, we believe that behind every great website lies a
        strategic blend of creativity, innovation, and meticulous attention to
        detail. Founded on the principle of empowering businesses to thrive in
        the digital age, we've honed our craft to deliver bespoke web solutions
        that not only captivate audiences but also drive tangible growth. With a
        team of seasoned experts at the helm, we take pride in our ability to
        transform visions into reality. From conceptualization to execution, we
        work tirelessly to understand your unique needs, goals, and aspirations.
        Our collaborative approach ensures that every aspect of your website is
        a true reflection of your brand identity and resonates deeply with your
        target audience.
      </p>
    </motion.section>
  );
};

export default About;
