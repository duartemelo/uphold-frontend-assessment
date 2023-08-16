import React from "react";
import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

function Separator({ className }) {
  return (
    <div className={twMerge("mx-auto px-8", className)}>
      <hr />
    </div>
  );
}

Separator.propTypes = {
  className: PropTypes.string,
};

Separator.defaultProps = {
  className: "",
};

export default Separator;
