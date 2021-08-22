import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import AuthContext from "../context/auth-context";

const Home = () => {
  const ctx = React.useContext(AuthContext);
  return (
    <div className={classes.container}>
      {!ctx.isLoggedIn && (
        <NavLink to="/login" className={classes.small}>
          Sign Up
        </NavLink>
      )}
      {!ctx.isLoggedIn && (
        <NavLink to="/signup" className={classes.small}>
          Log In
        </NavLink>
      )}
      {ctx.isLoggedIn && <button className={classes.btn}>Logout</button>}
      <div className={classes.cont}>
        <p>Welcome to url-shortner</p>
        {ctx.isLoggedIn && (
          <NavLink to="/short" className={classes.link}>
            Create a short Url
          </NavLink>
        )}
        <p className={classes.middle}>
          Please login to the website to create your link
        </p>
      </div>
    </div>
  );
};

export default Home;
