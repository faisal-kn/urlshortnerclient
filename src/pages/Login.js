import React from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import axios from "axios";

import classes from "./Login.module.css";
import Button from "../UI/Button";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const options = {
      url: "https://urlshortdev.herokuapp.com/api/v2/users/login",
      method: "POST",
      withCredentials: true,
      data: {
        email,
        password,
      },
    };
    const res = await axios(options);

    if (res.data.status === "success") {
      props.logStateHandler(true, res.data.data.user._id);
      history.replace("/");
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>Please provide your email and password</p>
        <label htmlFor="useremail">Email</label>
        <input
          type="email"
          id="useremail"
          placeholder="name@example.com"
          onChange={emailChangeHandler}
          value={email}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          onChange={passwordChangeHandler}
          value={password}
        />
        <Button type="submit" text="Submit"></Button>
        <p>Do not have a account ? Create a account here</p>
        <NavLink to="/signup" className={classes.link}>
          Signup
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
