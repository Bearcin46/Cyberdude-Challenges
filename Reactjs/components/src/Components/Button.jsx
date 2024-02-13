import React from "react";
import BootstrapButton from "./BootstrapButton";

const Button = () => {
  return (
    <div className="flex  gap-6">
      <BootstrapButton
        name="Primary"
        bgColor="bg-blue-500"
        color="text-white"
        hover="hover:bg-blue-800"
      />
      <BootstrapButton
        name="Success"
        bgColor="bg-green-500"
        color="text-white"
        hover="hover:bg-green-700"
      />
      <BootstrapButton
        name="Warning"
        bgColor="bg-yellow-500"
        color="text-white"
        hover="hover:bg-yellow-600"
      />
      <BootstrapButton
        name="Danger"
        bgColor="bg-red-500"
        color="text-white"
        hover="hover:bg-red-800"
      />
      <BootstrapButton
        name="Secondary"
        bgColor="bg-[#6b757dff]"
        color="text-white"
        hover="hover:bg-gray-600"
      />
      <BootstrapButton
        name="Dark"
        bgColor="bg-gray-800"
        color="text-white"
        hover="hover:bg-black"
      />
    </div>
  );
};

export default Button;
