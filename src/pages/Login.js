import React from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import axios from "axios";

import classes from "./Signup.module.css";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const options = {
      url: "http://127.0.0.1:3001/api/v2/users/login",
      method: "POST",
      withCredentials: true,
      data: {
        email,
        password,
      },
    };
    const res = await axios(options);
    console.log(res.data);
    if (res.data.status === "success") {
      props.logStateHandler(true);
      setRedirect(true);
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
        <button type="submit" className={classes.btn}>
          Submit
        </button>
        <p>Do not have a account ? Create a account here</p>
        <NavLink to="/signup" className={classes.link}>
          Signup
        </NavLink>
      </form>
      {redirect && (
        <Route path="/login" exact>
          <Redirect to="/short"></Redirect>
        </Route>
      )}
    </div>
  );
};

export default Login;
