"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useActiveSectionContext } from "@/context/active-content-section";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView]);

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>Our projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

// function Project({
//   title,
//   description,
//   tags,
//   imageUrl,
// }: (typeof projectsData)[number]) {
//   const ref = useRef(null);
//   useScroll({
//     target: "",
//     offset: ["0 1", "1.33 1"],
//   });

//   return (
//     <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition">
//       <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
//         <h3 className="text-2xl font-semibold">{title}</h3>
//         <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
//         <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
//           {tags.map((tag, index) => (
//             <li
//               className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
//               key={index}
//             >
//               {tag}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Image
//         src={imageUrl}
//         alt={title}
//         quality={95}
//         className="absolute top-8 -right-40 w-[28.25rem]
//         transition
//         group-hover:-translate-x-3
//         group-hover:translate-y-3
//         group-hover:-rotate-2
//         group-hover:scale-[1.04]
//         rounded-t-lg shadow-2xl
//         group-even:right-[initial] group-even:-left-40

//         group-even:group-hover:translate-x-3
//         group-even:group-hover:translate-y-3
//         group-even:group-hover:rotate-2

//         "
//       />
//     </section>
//   );
// }

export default Projects;
