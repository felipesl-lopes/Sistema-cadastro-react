import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  padding: 0 12px;
`;

export const ContainerForm = styled.div`
  background-color: #eaeaec;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LogoArea = styled.div`
  background-color: #181c2e;
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 50%;
  height: auto;
  max-width: 130px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #181c2e;
`;

export const TextRecover = styled(Link)`
  font-size: 0.9rem;
  margin-left: 2px;
  align-self: center;

  &:active{
    color: #4646e0;
  }
`;
