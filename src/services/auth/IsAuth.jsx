import React from "react";
import useAuth from "../../hooks/auth/useAuth";

const IsAuth = ({ children, ...rest }) => {
  const { isAuthenticated, user, token } = useAuth({});

  return isAuthenticated ? children : null;
};

export default IsAuth;
