import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UrlForm from "./pages/UrlForm";
import AuthContext from "./context/auth-context";

const App = () => {
  const [bearerToken, setToken] = React.useState("");
  const [logState, setLogState] = React.useState(false);

  const tokencreater = (token) => {
    setToken(token);
  };

  const logHandler = (state) => {
    setLogState(state);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: logState,
        token: bearerToken,
      }}
    >
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/home">
        <Home logStateHandler={logHandler}/>
      </Route>
      <Route path="/login">
        <Login tokenHandler={tokencreater} logStateHandler={logHandler} />
      </Route>
      <Route path="/signup">
        <Signup tokenHandler={tokencreater} logStateHandler={logHandler} />
      </Route>
      <Route path="/short">
        <UrlForm />
      </Route>
    </AuthContext.Provider>
  );
};

export default App;
