"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-content-section";
import { useInView } from "react-intersection-observer";
const Intro = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0 "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
              alt="The Cube Agency"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.5rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-ce"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <span className="font-bold">
          Hello, We are{" "}
          <span className="font-extrabold underline">The Cube Agency</span>{" "}
        </span>{" "}
        We are <span className="font-bold">full-stack developer's</span> with{" "}
        <span className="font-bold">3 years</span> of experience. We enjoy
        building <span className="italic">sites & apps</span>. Our focus is{" "}
        <span className="">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 group text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact us here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          download
        >
          Download Brochure{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
