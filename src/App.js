import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UrlForm from "./pages/UrlForm";
import AuthContext from "./context/auth-context";

const App = () => {
  const [logState, setLogState] = React.useState(false);

  const logHandler = (state) => {
    setLogState(state);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: logState,
      }}
    >
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/home">
        <Home logStateHandler={logHandler} />
      </Route>
      <Route path="/login">
        <Login logStateHandler={logHandler} />
      </Route>
      <Route path="/signup">
        <Signup logStateHandler={logHandler} />
      </Route>
      {logState && (
        <Route path="/short">
          <UrlForm />
        </Route>
      )}
      {!logState && (
        <Route path="/short">
          <Login logStateHandler={logHandler} />
        </Route>
      )}
    </AuthContext.Provider>
  );
};

export default App;
