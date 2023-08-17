import React from "react";
import PropTypes from "prop-types";

import Text from "../../atom/Text";
import Flag from "../../atom/Flag";

function Currency({ value, flagImageSrc, flagLabel }) {
  return (
    <div className="flex w-full justify-between mx-auto mt-4">
      <Text as="h3" className="font-bold text-gray-700">
        {value.toString()}
      </Text>
      <Flag imageSrc={flagImageSrc} label={flagLabel} />
    </div>
  );
}

Currency.propTypes = {
  value: PropTypes.number.isRequired,
  flagImageSrc: PropTypes.node.isRequired,
  flagLabel: PropTypes.string.isRequired,
};

export default Currency;
