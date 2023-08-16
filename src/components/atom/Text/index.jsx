import React from "react";
import PropTypes from "prop-types";

import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const textVariants = tv({
  base: "text-gray-900",
  variants: {
    as: {
      h1: "text-4xl font-bold",
      h3: "text-xl",
    },
  },
});

function Text({ as, className, children }) {
  const Component = as || "p";

  return (
    <Component className={twMerge(textVariants({ as }), className)}>
      {children}
    </Component>
  );
}

Text.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Text.defaultProps = {
  as: "p",
  className: "",
};

export default Text;
