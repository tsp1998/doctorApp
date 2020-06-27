import React from "react";
import { SignIn, SignUp } from ".";

function SignInSignUp(props) {
  const pathname = window.location.pathname;
  return (
    <div className="container">
      {pathname === "/signin-signup/signup" ? <SignUp /> : <SignIn />}
    </div>
  );
}

export default SignInSignUp;
