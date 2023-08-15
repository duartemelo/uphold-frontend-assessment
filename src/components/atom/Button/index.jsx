import React from "react";
import PropTypes from "prop-types";

import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const buttonVariants = tv({
  base: "font-semibold",
  variants: {
    theme: {
      text: "text-gray-400",
      action: "text-white bg-green-400 px-8 py-2 rounded-full",
    },
  },
});

function Button({ theme, className, href, onClick, children }) {
  if (theme === "text") {
    return (
      <a href={href} className={twMerge(buttonVariants({ theme }), className)}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="submit"
      className={twMerge(buttonVariants({ theme }), className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  theme: "action",
  className: "",
  href: "#",
  onClick: () => {},
  children: "",
};

export default Button;
