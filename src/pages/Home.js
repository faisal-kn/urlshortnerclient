import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import AuthContext from "../context/auth-context";
import axios from "axios";

const Home = (props) => {
  const ctx = React.useContext(AuthContext);

  const logoutHandler = async () => {
    const options = {
      url: "http://127.0.0.1:3001/api/v2/users/logout",
      method: "GET",
      withCredentials: true,
    };
    const res = await axios(options);
    console.log(res.data);
    if (res.data.status === "success") {
      props.logStateHandler(false);
    }
  };

  return (
    <div className={classes.container}>
      {!ctx.isLoggedIn && (
        <NavLink to="/signup" className={classes.small}>
          Sign Up
        </NavLink>
      )}
      {!ctx.isLoggedIn && (
        <NavLink to="/login" className={classes.small}>
          Log In
        </NavLink>
      )}
      {ctx.isLoggedIn && (
        <button className={classes.btn} onClick={logoutHandler}>
          Logout
        </button>
      )}
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
