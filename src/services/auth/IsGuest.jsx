import React from "react";
import useAuth from "../../hooks/auth/useAuth";

const IsGuest = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth({});

  return !isAuthenticated ? children : null;
};

export default IsGuest;
