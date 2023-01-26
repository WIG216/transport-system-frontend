import React from "react";

export const CardInfo = (props) => {
  return (
    <div className="mt-4">
      <h2 className="text-gray-900 title-font text-lg font-medium">
        The Catalyzer
      </h2>
      <p className="mt-1">$16.00</p>
      <p className="mt-1">Driver's name</p>
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        Driver Status
      </p>
    </div>
  );
};
