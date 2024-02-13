import React from "react";

const BootstrapButton = (props) => {
  return (
    <div>
      <button
        className={`px-7 py-2 rounded font-bold ${props.bgColor} ${props.color} ${props.hover}`}
      >
        {props.name}
      </button>
    </div>
  );
};

export default BootstrapButton;
