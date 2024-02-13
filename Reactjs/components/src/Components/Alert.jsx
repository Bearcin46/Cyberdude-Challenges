import React from "react";

const Alert = (props) => {
  return (
    <div className={`px-3 py-2 ${props.bgColor} focus:outline-none rounded`}>
      <p>
        {`This is a ${props.name} alert with`}
        <span className="font-bold">an example link</span>. Give it a click if
        you like.
      </p>
    </div>
  );
};

export default Alert;
