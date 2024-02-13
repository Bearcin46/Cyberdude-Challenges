import Alert from "./Alert";

import React from "react";

const AlertBox = () => {
  return (
    <div className="flex flex-col gap-4 bg-red-400 mx-auto rounded px-10 py-10  ">
      <Alert bgColor="bg-[#cce5ffff]" name="primary" />
      <Alert bgColor="bg-[#e3e4e6ff]" name="secondary" />
      <Alert bgColor="bg-[#d3edd9ff]" name="success" />
      <Alert bgColor="bg-[#f7d7daff]" name="danger" />
      <Alert bgColor="bg-[#fff3ccff]" name="warning" />
      <Alert bgColor="bg-[#d3eef2ff]" name="info" />
      <Alert bgColor="bg-white" name="light" />
      <Alert bgColor="bg-[#d7d8d9ff]" name="dark" />
    </div>
  );
};

export default AlertBox;
