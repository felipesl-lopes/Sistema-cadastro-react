import React, { useContext, useState } from "react";
import { ButtonAuth } from "../../../components/ButtonAuth";
import { InputAuth } from "../../../components/InputAuth";
import { AuthContext } from "../../../contexts/auth";
import {
  ButtonLink,
  Container,
  Form,
  Login,
  LoginArea,
  Logo,
  Title,
} from "../styled";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (email !== "" && password !== "") {
      await signIn(email, password);
    }
  };

  return (
    <Container>
      <Login>
        <LoginArea>
          <Logo
            src={require("../../../assets/logo.png")}
            alt="Logo do sistema de chamados"
          />
        </LoginArea>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Title>Entrar</Title>

          <InputAuth
            onChange={setEmail}
            value={email}
            autoCapitalize="none"
            placeholder="E-mail"
            type="email"
            id="email"
          />

          <InputAuth
            autoCapitalize="none"
            placeholder="Senha"
            value={password}
            type="password"
            autoComplete="false"
            onChange={setPassword}
          />

          <ButtonAuth title={"Acessar"} />
        </Form>

        <ButtonLink to={"/register"}>Criar uma conta</ButtonLink>
      </Login>
    </Container>
  );
};
