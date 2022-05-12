import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const Register = () => {
  const navigate = useNavigate();
  // Form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // Email, password sign in hook
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // google sign up hook
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  // User info update hook
  const [updateProfile, updating, userUpError] = useUpdateProfile(auth);

  let errorElement;

  // Showing loading spinner
  if (loading || updating || gLoading) {
    return <Loading></Loading>;
  }

  if (error || userUpError || gError) {
    errorElement = (
      <p className="text-red-500 max-w-xs mx-auto">
        <small>
          {error?.message || userUpError?.message || gError?.message}
        </small>
      </p>
    );
  } else {
    errorElement = undefined;
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    navigate("/appointment");
  };
  return (
    <div className="loginContainer h-[100vh] flex justify-center items-center">
      <div className="md:w-[385px] w-[345px] pb-6 shadow-xl rounded-xl">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center text-xl pb-[30px] pt-[20px]">Sign up</h1>
          {/* Name INPUT */}
          <div className=" form-control  max-w-xs mb-2 mx-auto">
            <label className="label py-1 pt-0">
              <span className="text-sm">Name</span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Errors for Name */}
            <label className="label pb-0">
              {errors.name?.type === "required" && (
                <span className="text-[12px] text-red-600">
                  *{errors.name.message}
                </span>
              )}
            </label>
          </div>
          {/* Input for EMAIL */}
          <div className=" form-control  max-w-xs mb-2 mx-auto">
            <label className="label py-1 pt-0">
              <span className="text-sm">Email</span>
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                // pattern: {
                //   value:
                //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                //   message: "Provide a valid email",
                // },
              })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Errors for email */}
            <label className="label pb-0">
              {errors.email?.type === "required" && (
                <span className="text-[12px] text-red-600">
                  *{errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-[12px] text-red-600">
                  *{errors.email.message}
                </span>
              )}
            </label>
          </div>
          {/* Password INPUT */}
          <div className=" form-control  max-w-xs mb-2 mx-auto">
            <label className="label py-1 pt-0">
              <span className="text-sm">Password</span>
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 character or longer.",
                },
              })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Errors for password */}
            <label className="label pb-0">
              {errors.password?.type === "required" && (
                <span className="text-[12px] text-red-600">
                  *{errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-[12px] text-red-600">
                  *{errors.password.message}
                </span>
              )}
            </label>
          </div>
          {errorElement && errorElement}
          {/* Login BUTTON */}
          <input
            className="h-[48px] w-[328px] block mx-auto text-white rounded-[8px] bg-accent  max-w-xs mt-[10px]"
            type="submit"
            value={`REGISTER`}
          />
          {/* Form toggler */}
          <p className="text-center text-[12px] font-semibold pt-[11px]">
            Already have an account?{" "}
            <Link className="text-secondary" to={"/login"}>
              Login here
            </Link>
          </p>
        </form>
        <div className="w-[320px] mx-auto">
          <div className="divider w-full ">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline block w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
