import React from "react";
import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

import Text from "../Text";

function Flag({ className, imageSrc, label }) {
  return (
    <div
      className={twMerge(
        "flex gap-2 justify-start items-center w-[70px] h-[30px]",
        className
      )}
    >
      <img src={imageSrc} alt="Flag" className="h-[20px]" />
      <Text className="font-semibold text-gray-700">{label}</Text>
    </div>
  );
}

Flag.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

Flag.defaultProps = {
  className: "",
};

export default Flag;
