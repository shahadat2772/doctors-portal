import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="loginContainer h-[100vh] flex justify-center items-center">
      <div className="md:w-[385px] w-[345px] pb-6 shadow-xl rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center text-xl pb-[30px] pt-[25px]">Sign Up</h1>
          <div className=" form-control  max-w-xs mx-auto">
            <label className="label py-1">
              <span className="text-sm">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <span className="text-sm text-red-600">Name is required</span>
            )}
          </div>
          <div className=" form-control  max-w-xs mb-2 mx-auto">
            <label className="label py-1">
              <span className="text-sm">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email?.type === "required" && (
              <span className="text-sm text-red-600">Email is required</span>
            )}
          </div>
          <div className=" form-control  max-w-xs mx-auto">
            <label className="label py-1">
              <span className="text-sm">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <span className="text-sm text-red-600">Password is required</span>
            )}
          </div>
          <input
            className="h-[48px] w-[328px] block mx-auto text-white rounded-[8px] bg-accent  max-w-xs mt-[10px]"
            type="submit"
            value={`REGISTER`}
          />
          <p className="text-center text-[12px] font-semibold pt-[11px]">
            New to Doctors Portal?{" "}
            <Link className="text-secondary" to={"/login"}>
              Create new account
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
