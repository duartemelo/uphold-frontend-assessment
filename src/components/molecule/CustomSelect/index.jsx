import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./CustomSelect.css";

import { twMerge } from "tailwind-merge";

function CustomSelect({ options, className }) {
  const [selectValue, setSelectValue] = useState(options[0]);

  const handleSelectChange = (value) => {
    setSelectValue(value);
    // console.log(selectValue);
  };

  return (
    <Select
      options={options}
      value={selectValue}
      onChange={handleSelectChange}
      className={twMerge("react-select", className)}
      classNamePrefix="react-select"
      isSearchable={false}
      isMulti={false}
      // isLoading
      // menuIsOpen
    />
  );
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

CustomSelect.defaultProps = {
  className: "",
};

export default CustomSelect;
