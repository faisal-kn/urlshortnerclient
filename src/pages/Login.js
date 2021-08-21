import React from "react";

import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <p>Please provide your details</p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="    Akshay" />
        <label htmlFor="useremail">Email</label>
        <input type="email" id="useremail" placeholder="      name@example.com" />
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" />
        <label htmlFor="confirm">Confirm Password</label>
        <input type="password" id="confirm"></input>
      </form>
    </div>
  );
};

export default Login;
