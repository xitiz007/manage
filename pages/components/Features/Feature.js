import React from "react";

const Feature = ({index, title, description}) => {
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
      {/* heading */}
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
            {index.toString().length === 1 && '0'}{index}
          </div>
          <h3 className="text-base font-bold md:mb-4 md:hidden">
            {title}
          </h3>
        </div>
      </div>
      <div>
        <h3 className="hidden md:block mb-4 text-lg font-bold">
          {title}
        </h3>
        <p className="text-darkGrayishBlue">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Feature;
