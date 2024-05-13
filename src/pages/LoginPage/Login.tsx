// import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="flex justify-center items-center flex-col h-[100vh]">
      {/* <p>
        <NavLink to="/app">App</NavLink>
      </p> */}
      <form
        method="post"
        className="bg-gray-200 flex flex-col gap-5 justify-center items-center px-[1.5em] w-[23em] rounded-md py-[2em]"
      >
        <h2 className="text-3xl font-semibold mb-[0.8em]">Sign In</h2>
        <label htmlFor="username " className="w-[100%]">
          <input
            type="text"
            id="username"
            className="w-[100%] py-[0.3em] px-[0.8em] rounded-sm border-2 border-gray-300 focus:outline-gray-400"
            placeholder="Email"
          />
        </label>

        <label htmlFor="password" className="w-[100%]">
          <input
            type="password"
            id="password"
            className="w-[100%] py-[0.3em] px-[0.8em] rounded-sm border-2 border-gray-300 focus:outline-gray-400"
          />
        </label>

        <div className="flex items-end justify-end w-full">
          <button
            type="submit"
            className="justify-end items-end bg-[#0ca678] text-white py-[0.5em] px-[0.6em] rounded-[0.3em]"
          >
            <Link to="/nav/dashboard">Login to Clocking</Link>
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
