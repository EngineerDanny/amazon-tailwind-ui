const SignUpPage = () => {
  return (
    //   SignUpPage
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-44 h-44 "
        src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
        alt="Logo"
      />
      <div className="border-gray-200 border-solid border-2 rounded p-5 shadow-sm">
        <h1 className=" text-2xl font-medium my-3">Create account</h1>

        <div className="flex flex-col mb-2">
          <label htmlFor="Name" className="font-bold text-xs">
            Your name
          </label>
          <input
            type="text"
            className="border-solid border-gray-400 border-2 rounded py-2 px-3  focus: focus  focus:outline-none"
          />
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="font-bold text-xs">
            Email
          </label>
          <input
            type="email"
            name="Email"
            className="border-solid border-gray-400 border-2 rounded py-2 px-3  focus: focus  focus:outline-none"
          />
        </div>

        <div className="flex flex-col  mb-2">
          <label htmlFor="Password" className="font-bold text-xs">
            Password
          </label>
          <input
            type="password"
            name="Password"
            placeholder="At least 6 characters"
            className="border-solid border-gray-400 border-2 rounded py-2 px-3  focus: focus  focus:outline-none"
          />
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="confirmPassword" className="font-bold text-xs">
            Re-enter password
          </label>
          <input
            type="password"
            name="Password"
            className="border-solid border-gray-400 border-2 rounded py-2 px-3  focus: focus  focus:outline-none"
          />
        </div>

        <button className="px-14 py-1 border border-solid border-black bg-yellow-300 text-sm font-semibold rounded mt-2">
          Create your Amazon account
        </button>

        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
