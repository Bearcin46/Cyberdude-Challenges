import React from "react";
import PropTypes from "prop-types";

const InputNumber = ({
  name,
  placeholder,
  value,
  handleOnChange,
  required,
}) => {
  return (
    <input
      type="tel"
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required={required}
      className="bg-green-200 px-3 py-2 rounded focus:outline-none"
    />
  );
};
InputNumber.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChanges: PropTypes.func,
  required: PropTypes.bool,
};

export default InputNumber;
