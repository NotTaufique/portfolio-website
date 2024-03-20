"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-content-section";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");
    }
  }, [inView]);
  const { theme, toggleTheme } = useTheme();
  return (
    <section
      ref={ref}
      id="experience"
      className="  scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>Our Services</SectionHeading>
      <VerticalTimeline lineColor="" animate>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              // date={item.date}
              icon={item.icon}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "7px solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              {/* <p className="font-normal !mt-0">{item.location}</p> */}
              <p className="!mt-1 !font-normal dark:text-white/75 text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
