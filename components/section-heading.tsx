import React from "react";

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="text-3xl text-center font-medium capitalize mb-8">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeading;
