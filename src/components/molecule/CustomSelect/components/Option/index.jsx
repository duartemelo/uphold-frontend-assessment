import React from "react";
import PropTypes from "prop-types";
import Flag from "../../../../atom/Flag";

function Option({ imageSrc, label }) {
  return (
    <div className="rounded-full flex justify-center items-center gap-2">
      <Flag imageSrc={imageSrc} label={label} />
    </div>
  );
}

Option.propTypes = {
  imageSrc: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Option;
