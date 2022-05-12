import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import el from "date-fns/esm/locale/el/index.js";
const Login = () => {
  // Form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // Email, password sign in hook
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // google sign up hook
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  let errorElement;

  // Showing loading spinner
  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    errorElement = (
      <p className="text-red-500 max-w-xs mx-auto">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  } else {
    errorElement = undefined;
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log({ email, password });
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="loginContainer h-[100vh] flex justify-center items-center">
      <div className="md:w-[385px] w-[345px] pb-6 shadow-xl rounded-xl">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center text-xl pb-[30px] pt-[25px]">Login</h1>
          {/* Email INPUT */}
          <div className=" form-control  max-w-xs mb-2 mx-auto">
            <label className="label py-1">
              <span className="text-sm">Email</span>
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Provide a valid email", // JS only: <p>error message</p> TS only support string
                },
              })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Errors for email */}
            <label className="label">
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
            <label className="label py-1">
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
                  message: "Must be 6 character or longer.", // JS only: <p>error message</p> TS only support string
                },
              })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Errors for password */}
            <label className="label">
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
            {/* Forgot password */}
            <label className="label py-1">
              <span className="label-text-alt">Forgot Password?</span>
            </label>
          </div>
          {errorElement && errorElement}
          {/* Login BUTTON */}
          <input
            className="h-[48px] w-[328px] block mx-auto text-white rounded-[8px] bg-accent  max-w-xs mt-[10px]"
            type="submit"
            value={`LOGIN`}
          />
          {/* Form toggler */}
          <p className="text-center text-[12px] font-semibold pt-[11px]">
            New to Doctors Portal?{" "}
            <Link className="text-secondary" to={"/register"}>
              Create new account
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

export default Login;
