import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  return (
    <div className="loginContainer h-[100vh] flex justify-center items-center">
      <form className="md:w-[385px] w-[345px] h-[550px] shadow-xl rounded-xl">
        <h1 className="text-center text-xl pb-[30px] pt-[25px]">Register</h1>
        <div className=" form-control  max-w-xs mb-2 mx-auto">
          <label className="label py-1">
            <span className="text-sm">Name</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className=" form-control mb-2 max-w-xs mx-auto">
          <label className="label py-1">
            <span className="text-sm">Email</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className=" form-control mb-2 max-w-xs mx-auto">
          <label className="label py-1">
            <span className="text-sm">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full  max-w-xs"
          />
        </div>
        <input
          className="h-[48px] w-[328px] block mx-auto text-white rounded-[8px] bg-accent  max-w-xs mt-[20px]"
          type="submit"
          value={`REGISTER`}
        />
        <p className="text-center text-[12px] font-semibold pt-[11px]">
          Already have an account?{" "}
          <Link className="text-secondary" to={"/login"}>
            Login here
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
