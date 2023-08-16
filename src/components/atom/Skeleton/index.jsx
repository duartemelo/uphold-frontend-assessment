import React from "react";
import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Skeleton({ className }) {
  return (
    <div
      className={twMerge(
        "animate-pulse h-4 w-48 bg-gray-200 rounded-full dark:bg-gray-700",
        className
      )}
    />
  );
}

Skeleton.propTypes = {
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  className: "",
};

export default Skeleton;
