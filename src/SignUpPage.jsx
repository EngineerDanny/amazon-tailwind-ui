const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-44 h-44"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="Logo"
        />
        <div>
          <h1>Create account</h1>
          <div className="flex flex-col">
            <label htmlFor="Name">Your name</label>
            <input
              type="text"
              className="border-solid border-gray-400 border-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="Password"
              placeholder="At least 6 characters"
              className="border-solid border-gray-400 border-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Re-enter password</label>
            <input
              type="password"
              name="Password"
              className="border-solid border-gray-400 border-2"
            />
          </div>

          <button className="b">Create your Amazon account</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
