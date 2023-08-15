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

const Button = (props) => {
  return (
    <button
      className={twMerge(button({ theme: props.theme }), props.className)}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
