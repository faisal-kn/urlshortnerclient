import React from "react";

const AuthContext = React.createContext({
  token: "",
  id:"",
});

export default AuthContext;
