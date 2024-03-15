"use client";

import React, { createContext, useState } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

export const ActiveSectionContext = createContext<{
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] =
    useState<(typeof links)[number]["name"]>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;


export function useActiveSectionContext(){
  const context = React.useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider");
  }
  return context;
}