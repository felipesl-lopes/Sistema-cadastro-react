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

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (name !== "" && email !== "" && password !== "") {
      await signUp(name, email, password);
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
          <Title>Criar conta</Title>

          <InputAuth
            autoCapitalize="words"
            placeholder="Nome completo"
            value={name}
            type="text"
            onChange={setName}
          />

          <InputAuth
            autoCapitalize="none"
            placeholder="E-mail"
            value={email}
            type="email"
            id="email"
            onChange={setEmail}
          />

          <InputAuth
            autoCapitalize="none"
            placeholder="Senha"
            value={password}
            type="password"
            autoComplete="false"
            onChange={setPassword}
          />

          <ButtonAuth title={"Cadastrar"} />
        </Form>

        <ButtonLink to={"/"}>Já possui uma conta? Faça o login</ButtonLink>
      </Login>
    </Container>
  );
};
