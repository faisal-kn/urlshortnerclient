import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Signup.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <p>Please provide your email and password</p>
        <label htmlFor="useremail">Email</label>
        <input type="email" id="useremail" placeholder="     name@example.com" />
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" />
        <p>Do not have a account ? Create a account here</p>
        <NavLink to="/login" className={classes.link}>
          Signup
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
