import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WeChat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Login In</button>
        </form>
        <p>Don't have an account? Sign Up!</p>
      </div>
    </div>
  );
};

export default Login;
