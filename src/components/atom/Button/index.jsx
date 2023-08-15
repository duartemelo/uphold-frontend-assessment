import React from "react";
import PropTypes from "prop-types";

import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const button = tv({
  base: "font-semibold",
  variants: {
    theme: {
      text: "text-gray-400",
      action: "text-white bg-green-400 px-8 py-2 rounded-full",
    },
  },
});

function Button({ theme, className, children }) {
  return (
    <button type="submit" className={twMerge(button({ theme }), className)}>
      {children}
    </button>
  );
}

Button.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  theme: "action",
  className: "",
  children: "",
};

export default Button;
