import React from "react";
import axios from "axios";
import classes from "./Signup.module.css";
import { useHistory } from "react-router-dom";
import Button from "../UI/Button";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import Spinner from "../components/Spinner";

const Signup = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setConfirmPassword] = React.useState("");
  const history = useHistory();
  const { promiseInProgress } = usePromiseTracker();
  
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const passCheckChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitHandler = async () => {
    const options = {
      url: "https://urlshortdev.herokuapp.com/api/v2/users/signup",
      method: "POST",
      withCredentials: true,
      data: {
        name,
        email,
        password,
        confirmPassword: passwordConfirm,
      },
    };
    return await axios(options);
  };

  const promiseHandler = async (e) => {
    e.preventDefault();
    const res = await trackPromise(submitHandler());
    if (res.data.status === "success") {
      props.logStateHandler(true, res.data.data.newUser._id);
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
            <p>Please provide your details</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Akshay"
              onChange={nameChangeHandler}
              value={name}
            />
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
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              onChange={passCheckChangeHandler}
            ></input>
            <Button type="submit" text="Submit"></Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;
