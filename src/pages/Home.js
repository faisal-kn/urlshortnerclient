import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const home = () => {
  return (
    <div className={classes.container}>
      <NavLink to="/login">Sign Up</NavLink>
      <NavLink to="/signup">Log In</NavLink>
      <div className={classes.cont}>
        <p>Welcome to our url-shortner</p>
        <p className={classes.middle}>
          Please login to the website to create your link
        </p>
      </div>
    </div>
  );
};

export default home;
