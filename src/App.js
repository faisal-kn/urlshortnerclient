import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </>
  );
};

export default App;
