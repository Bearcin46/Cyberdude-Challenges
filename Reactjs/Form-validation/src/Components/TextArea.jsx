import PropTypes from "prop-types";
import React from "react";

const TextArea = ({ name, placeholder, value, handleOnChange, required }) => {
  return (
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required={required}
      cols="30"
      rows="4"
      className="bg-green-200 px-3 py-2 rounded focus:outline-none"
    ></textarea>
  );
};
TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  required: PropTypes.bool,
};
export default TextArea;
