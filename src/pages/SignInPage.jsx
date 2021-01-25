import React from "react";
import CustomFooter from "../components/CustomFooter";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-40  h-32 object-fill"
        src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
        alt="Logo"
      />

      <form
        action="submit"
        className="border-gray-200 border-solid border-2 
        rounded p-5 shadow-sm w-96"
      >
        <h1 className=" text-2xl font-medium my-3">Sign In</h1>

        <div className="flex flex-col mb-2">
          <label htmlFor="Name" className="font-bold text-xs">
            Email or mobile phone number
          </label>
          <input
            type="email"
            className="border-solid border-gray-400 border-2 rounded py-1 px-3 
            focus:outline-none text-sm focus:border-yellow-500 focus:shadow-outline"
          />
        </div>

        <button
          className="px-14 py-1 border border-solid border-black
         bg-yellow-300 text-sm font-medium rounded mt-2 w-full hover:opacity-50 "
        >
          Continue
        </button>

        <p className="mt-4 text-sm mb-3">
          By continuing, you agree to Amazon's
          <span className=" text-blue-600"> Conditions of Use</span> and
          <span className=" text-blue-600"> Privacy Notice.</span>
        </p>
        <small className="text-blue-600 ">Need help?</small>
      </form>

      <div className="flex items-center my-4">
        <div className=" bg-gray-100 h-0.5 w-32 "></div>
        <small className="mx-3 text-gray-600">New to Amazon?</small>
        <div className=" bg-gray-100 h-0.5 w-32 "></div>
      </div>

      <button
        className="px-24  py-1.5 border border-solid border-black
          bg-gray-200 text-sm font-medium rounded hover:opacity-70"
      >
        Create your Amazon account
      </button>

      <div className="w-full h-0.5 mt-7">
        <div className=" bg-gray-200 h-0.5 w-full"></div>
      </div>
      <div className="w-full h-56">
        <CustomFooter />
      </div>
    </div>
  );
};

export default SignInPage;
