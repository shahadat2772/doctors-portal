import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";
import useToken from "../../../hooks/useToken";

const Login = () => {
  // Getting location
  let location = useLocation();

  // Navigator
  const navigate = useNavigate();

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

  // Password reset EMAIL
  const [sendPasswordResetEmail, sending, rError] =
    useSendPasswordResetEmail(auth);

  // Getting accessToken:
  const [token] = useToken(user || gUser);

  // Getting last location

  let from = location.state?.from?.pathname || "/home";

  let errorElement;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from]);

  // Showing loading spinner
  if (loading || gLoading || sending) {
    return <Loading></Loading>;
  }

  if (error || gError || rError) {
    errorElement = (
      <p className="text-red-500 max-w-xs mx-auto">
        <small>{error?.message || gError?.message || rError?.message}</small>
      </p>
    );
  } else {
    errorElement = undefined;
  }

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    await signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    // Getting the value from email
    const email = document.getElementById("emailInput").value;
    if (!email) {
      toast.error("Enter an email to reset");
    } else {
      await sendPasswordResetEmail(email);
      toast.success("Password reset email sended");
    }
  };

  return (
    <div className="loginContainer h-[100vh] flex justify-center items-center">
      <div className="md:w-[385px] w-[345px] pb-6 shadow-xl rounded-xl">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center text-xl pb-[30px] pt-[20px]">Login</h1>
          {/* Email INPUT */}
          <div className=" form-control  max-w-xs mb-2 mx-auto">
            <label className="label py-1 pt-0">
              <span className="text-sm">Email</span>
            </label>
            <input
              id="emailInput"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
              type="email"
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
              type="password"
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
            {/* Forgot password */}
            <label
              onClick={() => handleResetPassword()}
              className="label py-1 cursor-pointer"
            >
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
