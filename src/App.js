import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UrlForm from "./pages/UrlForm";

const App = () => {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/check">
        <UrlForm />
      </Route>
    </>
  );
};

export default App;
