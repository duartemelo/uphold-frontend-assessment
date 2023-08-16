import React from "react";
import PropTypes from "prop-types";
import Text from "../../../../atom/Text";

function Option({ imageSrc, label }) {
  return (
    <div className="rounded-full flex justify-center items-center gap-2">
      <img src={imageSrc} alt="Flag" className="h-[20px]" />
      <Text>{label}</Text>
    </div>
  );
}

Option.propTypes = {
  imageSrc: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Option;
