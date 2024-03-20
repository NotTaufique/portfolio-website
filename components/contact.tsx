"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-content-section";
import { useInView } from "react-intersection-observer";
import { sendEmail } from "@/actions/sendEmail";
import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast.success("Thanks for contacting Us!");
};

const Contact = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
    }
  }, [inView]);

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact us</SectionHeading>
      <p className="dark:text-white/80 text-gray-700 -mt-5">
        Please contact us directy at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          theagencycube@gmail.com
        </a>{" "}
        or through this form{" "}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          await sendEmail(formData);
          const form = document.getElementById("emailform") as HTMLFormElement;
          if (form) {
            form.reset();
            notify();
          }
        }}
        id="emailform"
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all rounded-lg px-4 border border-black/10"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="dark:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100  h-52 my-3 rounded-lg border border-black/10 p-4 "
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all dark:bg-white dark:bg-opacity-10"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105" />{" "}
        </button>
      </form>
      <Toaster />
    </motion.section>
  );
};

export default Contact;
