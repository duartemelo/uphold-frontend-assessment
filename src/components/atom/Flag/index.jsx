import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";

function Flag({imageSrc, label}) {
  return (
    <>
    <img src={imageSrc} alt="Flag" className="h-[20px]" />
      <Text>{label}</Text>
    </>
  )
}

Flag.propTypes = {
  imageSrc: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Flag;