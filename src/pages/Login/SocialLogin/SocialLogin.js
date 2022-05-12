import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const SocialLogin = () => {
  // google sign up hook
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className="w-[320px] mx-auto">
      <div className="divider w-full ">OR</div>
      <button className="btn btn-outline block w-full">
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default SocialLogin;
