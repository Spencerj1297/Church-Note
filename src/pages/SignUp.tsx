import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="font-normal mb-4 text-4xl lg:text-5xl md:text-4xl font-extrabold text-white max-w-2xl lg:leading-[1.5]">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-[75%] md:w-[600px] mx-auto flex flex-col items-center justify-center bg-white p-[30px] rounded-lg">
        <div className="mb-4 ">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            {...register("firstName", { required: "First name is required" })}
            className="border-b border-gray-500 w-full md:w-[300px] mt-12"
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            className="border-b border-gray-500 w-ful md:w-[300px] mt-12"
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
            className="border-b border-gray-500 w-full md:w-[300px] mt-12"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <button type="submit" className="mt-12 px-4 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

export default SignUp;
