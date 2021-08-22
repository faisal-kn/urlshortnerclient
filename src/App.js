import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UrlForm from "./pages/UrlForm";
import AuthContext from "./context/auth-context";

const App = () => {
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: true,
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
        <Signup />
      </Route>
      <Route path="/short">
        <UrlForm />
      </Route>
    </AuthContext.Provider>
  );
};

export default App;
