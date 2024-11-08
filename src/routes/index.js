import { Route, Routes } from "react-router-dom";
import { RecoverPassword } from "../pages/Authentication/RecoverPassword";
import { SignIn } from "../pages/Authentication/SignIn";
import { SignUp } from "../pages/Authentication/SignUp";
import { Customers } from "../pages/Customers";
import { Dashboard } from "../pages/Dashboard";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";
import { Private } from "./Private";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/recoverPassword" element={<RecoverPassword />} />

      <Route
        path="/dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />

      <Route
        path="/profile"
        element={
          <Private>
            <Profile />
          </Private>
        }
      />

      <Route
        path="/customers"
        element={
          <Private>
            <Customers />
          </Private>
        }
      />

      <Route
        path="/new"
        element={
          <Private>
            <New />
          </Private>
        }
      />

      <Route
        path="/new/:id"
        element={
          <Private>
            <New />
          </Private>
        }
      />
    </Routes>
  );
};
