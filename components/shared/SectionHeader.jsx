import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <h1 className="font-semibold text-lg mb-6 w-full border-b-2 border-blue-500">
      {title}
    </h1>
  );
};

export default SectionHeader;
