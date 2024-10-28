import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

const ButtonAuth = ({ title, disable, ...children }) => {
  const { loadingAuth } = useContext(AuthContext);

  return (
    <Button
      style={{
        backgroundColor: disable && "#aaa",
        cursor: disable && "default",
        transform: disable && "none",
        boxShadow: disable && "initial",
      }}
      disabled={disable}
      type="submit"
      {...children}
    >
      {loadingAuth ? "Carregando..." : title}
    </Button>
  );
};

const Button = styled.button`
  margin-top: 1rem;
  height: 36px;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  font-size: 15px;
  background-color: #181c2e;
  color: #fff;
  max-width: 600px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  &:active {
    transform: translate(0, 1px);
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

export default ButtonAuth;
