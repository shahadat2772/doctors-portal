import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="loginContainer h-[100vh] flex justify-center items-center">
      <div className="md:w-[385px] w-[345px] h-[480px] shadow-xl rounded-xl">
        <form>
          <h1 className="text-center text-xl pb-[30px] pt-[25px]">Login</h1>
          <div className=" form-control  max-w-xs mb-2 mx-auto">
            <label className="label py-1">
              <span className="text-sm">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className=" form-control  max-w-xs mx-auto">
            <label className="label py-1">
              <span className="text-sm">Password</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label py-1">
              <span className="label-text-alt">Forgot Password?</span>
            </label>
          </div>
          <input
            className="h-[48px] w-[328px] block mx-auto text-white rounded-[8px] bg-accent  max-w-xs mt-[10px]"
            type="submit"
            value={`LOGIN`}
          />
          <p className="text-center text-[12px] font-semibold pt-[11px]">
            New to Doctors Portal?{" "}
            <Link className="text-secondary" to={"/register"}>
              Create new account
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
