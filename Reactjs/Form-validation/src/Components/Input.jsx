import PropTypes from "prop-types";
import React from "react";

const Input = ({ name, placeholder, value, handleOnChange, required }) => {
  return (
    <div>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        required={required}
        className="bg-green-200 w-full px-3 py-2 rounded focus:outline-none"
      />
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChanges: PropTypes.func,
  required: PropTypes.bool,
};
export default Input;
