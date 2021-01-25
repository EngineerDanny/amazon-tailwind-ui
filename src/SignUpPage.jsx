import Footer from "./components/Footer";
const SignUpPage = () => {
  return (
    //   SignUpPage
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-40  h-32 object-fill"
        src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
        alt="Logo"
      />
      <form className="border-gray-200 border-solid border-2 rounded p-5 shadow-sm w-96 ">
        <h1 className=" text-2xl font-medium my-3">Create account</h1>

        <div className="flex flex-col mb-2">
          <label htmlFor="Name" className="font-bold text-xs">
            Your name
          </label>
          <input
            type="text"
            className="border-solid border-gray-400 border-2 rounded py-1 px-3 
               focus:outline-none text-sm focus:border-yellow-500 focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="font-bold text-xs">
            Email
          </label>
          <input
            type="email"
            name="Email"
            className="border-solid border-gray-400 border-2 
            rounded py-1 px-3 focus:outline-none text-sm 
            focus:border-yellow-500 focus:shadow-md"
          />
          <small className="text-xs  mt-1">
            Passwords must be at least 6 characters.
          </small>
        </div>

        <div className="flex flex-col  mb-2">
          <label htmlFor="Password" className="font-bold text-xs">
            Password
          </label>
          <input
            type="password"
            name="Password"
            placeholder="At least 6 characters"
            className="border-solid border-gray-400 border-2 rounded py-1 px-3 
            focus:outline-none text-sm focus:border-yellow-500 focus:shadow-md"
          />
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="confirmPassword" className="font-bold text-xs">
            Re-enter password
          </label>
          <input
            type="password"
            name="Password"
            className="border-solid border-gray-400 border-2 rounded 
            py-1 px-3 focus:outline-none text-sm focus:border-yellow-500 focus:shadow-md"
          />
        </div>

        <button
          className="px-14 py-1 border border-solid border-black
         bg-yellow-300 text-sm font-medium rounded mt-2 w-full hover:opacity-50 "
        >
          Create your Amazon account
        </button>

        <p className="mt-4 text-sm">
          By creating an account, you agree to Amazon's
          <span className=" text-blue-600"> Conditions of Use</span> and
          <span className=" text-blue-600"> Privacy Notice.</span>
        </p>

        <div className=" bg-gray-200  h-0.5 shadow mx-10 my-5"></div>

        <p className="text-sm">
          Already have an account?
          <span className="text-blue-600"> Sign-In</span>
        </p>

        <p className="text-sm">
          Purchasing for work?
          <span className="text-blue-600"> Create a business account</span>
        </p>
      </form>

      <div className="w-full h-0.5 mt-7">
        <div className=" bg-gray-300 h-0.5 w-full shadow "></div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
