import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/Authentication/SignIn";
import { SignUp } from "../pages/Authentication/SignUp";
import { Dashboard } from "../pages/Dashboard";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
