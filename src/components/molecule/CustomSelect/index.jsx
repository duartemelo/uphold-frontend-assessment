import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./styles.css";

import { twMerge } from "tailwind-merge";

function CustomSelect({ options, className, value, onChange }) {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      className={twMerge("react-select", className)}
      classNamePrefix="react-select"
      isSearchable={false}
      isMulti={false}
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
  value: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
  }),
  onChange: PropTypes.func,
};

CustomSelect.defaultProps = {
  className: "",
  value: {},
  onChange: () => {},
};

export default CustomSelect;
