import React from "react";
import PropTypes from "prop-types";

const InputNumber = ({ name, placeholder, register, error }) => {
  return (
    <div>
      <input
        type="tel"
        name={name}
        placeholder={placeholder}
        {...register}
        className="bg-green-200 px-3 py-2 rounded focus:outline-none w-full"
      />
      {error && (
        <small className="absolute left-1 bottom-[-18px] text-xs font-semibold text-red-800 ">
          {error.message}
        </small>
      )}
    </div>
  );
};
InputNumber.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChanges: PropTypes.func,
  required: PropTypes.bool,

  register: PropTypes.object,
  error: PropTypes.object,
};

export default InputNumber;
