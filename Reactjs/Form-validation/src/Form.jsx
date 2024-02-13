import { useForm } from "react-hook-form";
import Input from "./Components/Input";
import TextArea from "./Components/TextArea";
import InputNumber from "./Components/InputNumber";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(20, { message: "Name must be at most 20 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be 10 digits" })
    .max(10, { message: "Phone number must be 10 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters" })
    .max(200, { message: "Message must be at most 200 characters" }),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const sendInfo = (data) => {
    console.log("Sending this info to the server: ", data);
    alert("Thank you for response, we'll get back to you soon");
  };

  return (
    <div className="bg-green-600 mx-auto max-w-xl py-10 px-8 md:mt-14 rounded">
      <h1 className="text-2xl text-white text-center font-bold">
        Contact Form
      </h1>
      <form
        className="flex justify-center  gap-5 flex-col"
        onSubmit={handleSubmit(sendInfo)}
      >
        {/* name */}
        <div className="flex flex-col  gap-2 relative">
          <label htmlFor="fullName" className="text-white font-semibold">
            Full Name
          </label>
          <Input
            name="fullName"
            placeholder={"Enter your name"}
            register={register("fullName")}
            error={errors.fullName}
            required
          />
        </div>

        {/* phone */}
        <div className="flex flex-col  gap-2 relative">
          <label htmlFor="phone" className="text-white font-semibold">
            Phone
          </label>
          <InputNumber
            name="phone"
            placeholder={"Enter your mobile number"}
            register={register("phone")}
            error={errors.phone}
            required
          />
        </div>

        {/* email */}
        <div className="flex flex-col  gap-2 relative">
          <label htmlFor="email" className="text-white font-semibold">
            Email
          </label>
          <Input
            name="email"
            placeholder={"Enter your mail address"}
            register={register("email")}
            error={errors.email}
            required
          />
        </div>

        {/* text */}
        <div className="flex flex-col  gap-2 relative">
          <label htmlFor="message" className="text-white font-semibold">
            Message
          </label>
          <TextArea
            name="message"
            placeholder="Enter your Message"
            register={register("message")}
            error={errors.message}
            required
          />
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
