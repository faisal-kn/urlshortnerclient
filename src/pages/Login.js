import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

import classes from "./Login.module.css";
import Button from "../UI/Button";
import Spinner from "../components/Spinner";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const { promiseInProgress } = usePromiseTracker();
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async () => {
    const options = {
      url: "https://urlshortdev.herokuapp.com/api/v2/users/login",
      method: "POST",
      withCredentials: true,
      data: {
        email,
        password,
      },
    };

    return await axios(options);
  };

  const promiseHandler = async (e) => {
    e.preventDefault();
    const res = await trackPromise(submitHandler());
    if (res.data.status === "success") {
      props.logStateHandler(true, res.data.data.user._id);
      history.replace("/");
    }
  };

  return (
    <>
      {promiseInProgress === true ? (
        <Spinner />
      ) : (
        <div className={classes.container}>
          <form className={classes.form} onSubmit={promiseHandler}>
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
      )}
    </>
  );
};

export default Login;
