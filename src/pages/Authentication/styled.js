import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  padding: 0 12px;
`;

export const Login = styled.div`
  background-color: #eaeaec;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginArea = styled.div`
  background-color: #181c2e;
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const Logo = styled.img`
  width: 170px;
  height: auto;
  padding: 20px;
`;

export const Form = styled.form`
  margin-top: 1.5rem;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: #181c2e;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  height: 36px;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  font-size: 15px;
  background-color: #fff;
`;

export const Button = styled.button`
  margin-top: 1rem;
  height: 36px;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  font-size: 15px;
  background-color: #181c2e;
  color: #fff;
`;

export const ButtonLink = styled(Link)`
  margin: 1rem 0;
  color: #000;
`;
