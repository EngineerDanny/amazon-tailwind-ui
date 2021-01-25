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
            type="email | text"
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

        <p className="mt-4 text-sm">
          By continuing, you agree to Amazon's
          <span className=" text-blue-600"> Conditions of Use</span> and
          <span className=" text-blue-600"> Privacy Notice.</span>
        </p>
      </form>
      <div>
    
        <small>New to Amazon?</small>
      </div>

      <button
        className="px-24  py-1 border border-solid border-black
          bg-gray-200 text-sm font-medium rounded mt-2 hover:opacity-70 mb-7"
      >
        Create your Amazon account
      </button>
      <CustomFooter />
    </div>
  );
};

export default SignInPage;
