import PropTypes from "prop-types";
import React from "react";

const Input = ({ name, placeholder, type = "text", register, error }) => {
  return (
    <div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register}
        className="bg-green-200 w-full px-3 py-2 rounded focus:outline-none"
      />
      {error && (
        <small className="absolute left-1 bottom-[-18px] text-xs font-semibold text-red-800 ">
          {error.message}
        </small>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChanges: PropTypes.func,
  required: PropTypes.bool,
  register: PropTypes.object,
  error: PropTypes.object,
};
export default Input;
