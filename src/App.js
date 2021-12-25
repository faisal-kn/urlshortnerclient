import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UrlForm from "./pages/UrlForm";
import AuthContext from "./context/auth-context";
import Direct from './direct';

const App = () => {
  const [logState, setLogState] = React.useState(false);
  const [id,setId]=React.useState("");

  const logHandler = (state,id) => {
    setLogState(state);
    setId(id);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: logState,
        id,
      }}
    >
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" exact>
          <Home logStateHandler={logHandler} />
        </Route>
        <Route path="/login" exact>
          <Login logStateHandler={logHandler} />
        </Route>
        <Route path="/signup"exact>
          <Signup logStateHandler={logHandler} />
        </Route>
        {logState && (
          <Route path="/short" exact>
            <UrlForm />
          </Route>
        )}
        {!logState && (
          <Route path="/short" exact>
            <Login logStateHandler={logHandler} />
          </Route>
        )}
        <Route path="/:shortenedURL">
          <Direct />
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
};

export default App;
