import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider value={[token, setToken]}>
      {props.children}
    </AuthContext.Provider>
  );
};
