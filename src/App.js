import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UrlForm from "./pages/UrlForm";
import AuthContext from "./context/auth-context";

const App = () => {
  let tokenUsed = "";
  const tokencreater = (token) => {
    tokenUsed = token;
    console.log(token);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: false,
        token: tokenUsed,
      }}
    >
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
        <Signup tokenHandler={tokencreater} />
      </Route>
      <Route path="/short">
        <UrlForm />
      </Route>
    </AuthContext.Provider>
  );
};

export default App;
