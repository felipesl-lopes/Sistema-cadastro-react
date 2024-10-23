import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";

export const Private = ({ children }) => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <div></div>;
  }

  if (!signed) {
    return <Navigate to={"/"} />;
  }

  return children;
};
