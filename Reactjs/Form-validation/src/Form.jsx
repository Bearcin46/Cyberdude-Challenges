import React, { useState } from "react";
import Input from "./Components/Input";
import TextArea from "./Components/TextArea";
import InputNumber from "./Components/InputNumber";

const Form = () => {
  const [formVal, setFormVal] = useState({
    fullName: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errmsg, seterrmsg] = useState({
    fullName: null,
    email: null,
    phone: null,
    message: null,
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    // =================================name error=======================================================
    if (name === "fullName") {
      if (value.length < 4 || value.length > 20) {
        seterrmsg((pre) => ({
          ...pre,
          fullName: "Full name should contain 4 to 20 characters",
        }));
      } else {
        seterrmsg((pre) => ({
          ...pre,
          fullName: "",
        }));
      }
    }

    //===================================mobile no. error=================================================
    if (name === "phone") {
      if (value.length < 10 || value.length > 10) {
        seterrmsg((pre) => ({
          ...pre,
          phone: "Mobile number should contain 10 digits",
        }));
      } else {
        seterrmsg((pre) => ({
          ...pre,
          phone: "",
        }));
      }
    }
    //=====================================message error===========================================================
    if (name === "message") {
      if (value.length < 10) {
        seterrmsg((pre) => ({
          ...pre,
          message: "Please message us briefly",
        }));
      } else {
        seterrmsg((pre) => ({
          ...pre,
          message: "",
        }));
      }
    }
    //=========================================email error===========================================

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        seterrmsg((pre) => ({
          ...pre,
          email: "Please enter a valid email address",
        }));
      } else {
        seterrmsg((pre) => ({
          ...pre,
          email: "",
        }));
      }
    }

    setFormVal((previousVal) => ({
      ...previousVal,
      [name]: value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    alert(`Thank you ${formVal.fullName}! , We'll get back to you soon... `);
    console.log(formVal);
    setFormVal({ fullName: "", email: "", message: "", phone: "" });
  };

  return (
    <div className="bg-green-600 mx-auto max-w-xl py-10 px-8 md:mt-14 rounded">
      <h1 className="text-2xl text-white text-center font-bold">
        Contact Form
      </h1>
      <form
        className="flex justify-center  gap-5 flex-col"
        onSubmit={handleForm}
      >
        {/* name */}
        <div className="flex flex-col  gap-2 relative">
          <label htmlFor="fullName" className="text-white font-semibold">
            Full Name
          </label>
          <Input
            name="fullName"
            value={formVal.fullName}
            placeholder={"Enter your name"}
            handleOnChange={handleInputs}
            required={true}
          />
          <small className="absolute left-1 bottom-[-18px] text-xs font-semibold text-red-800 ">
            {errmsg.fullName}
          </small>
        </div>

        {/* phone */}
        <div className="flex flex-col  gap-2 relative">
          <label htmlFor="phone" className="text-white font-semibold">
            Phone
          </label>
          <InputNumber
            name="phone"
            value={formVal.phone}
            placeholder={"Enter your mobile number"}
            handleOnChange={handleInputs}
            required={true}
          />
          <small className="absolute left-1 bottom-[-18px] text-xs font-semibold text-red-800 ">
            {errmsg.phone}
          </small>
        </div>

        {/* email */}
        <div className="flex flex-col  gap-2 relative">
          <label htmlFor="email" className="text-white font-semibold">
            Email
          </label>
          <Input
            name="email"
            value={formVal.email}
            placeholder={"Enter your mail address"}
            handleOnChange={handleInputs}
            required={true}
          />
          <small className="absolute left-1 bottom-[-18px] text-xs font-semibold text-red-800 ">
            {errmsg.email}
          </small>
        </div>

        {/* text */}
        <div className="flex flex-col  gap-2 relative">
          <label htmlFor="message" className="text-white font-semibold">
            Message
          </label>
          <TextArea
            name="message"
            value={formVal.message}
            placeholder="Enter your Message"
            handleOnChange={handleInputs}
            required={true}
          />
          <small className="absolute left-1 bottom-[-18px] text-xs font-semibold text-red-800 ">
            {errmsg.message}
          </small>
        </div>

        {/* button */}
        <div className="flex flex-col mt-2" type="submit">
          <button className="bg-green-800 hover:bg-green-700 text-white text-xl font-semibold rounded py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
