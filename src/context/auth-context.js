import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: "",
});

export default AuthContext;
