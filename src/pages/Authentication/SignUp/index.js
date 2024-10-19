import React, { useState } from "react";
import {
  Button,
  ButtonLink,
  Container,
  Form,
  Input,
  Login,
  LoginArea,
  Logo,
  Title,
} from "../styled";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
          }}
        >
          <Title>Criar conta</Title>

          <Input
            autoCapitalize="words"
            placeholder="Nome completo"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            autoCapitalize="none"
            placeholder="E-mail"
            value={email}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            autoCapitalize="none"
            placeholder="Senha"
            value={password}
            type="password"
            autoComplete="false"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <ButtonLink to={"/"}>Já possui uma conta? Faça o login</ButtonLink>
      </Login>
    </Container>
  );
};
