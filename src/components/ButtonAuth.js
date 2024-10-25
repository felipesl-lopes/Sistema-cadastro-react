import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export const ButtonAuth = ({ title, ...children }) => {
  const { loadingAuth } = useContext(AuthContext);

  return (
    <Button type="submit" {...children}>
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
    transform: translate(2px, 2px);
  }
`;
