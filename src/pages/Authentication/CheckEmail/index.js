import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Spacer } from "../../../components/Spacer";
import {
  Container,
  ContainerForm,
  Form,
  Logo,
  LogoArea,
  Title,
} from "../styled";

export const CheckEmail = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const resetPassword = searchParams.get("resetPassword") === "true";

  return (
    <Container>
      <ContainerForm>
        <LogoArea>
          <Logo
            src={require("../../../assets/logo.png")}
            alt="Logo do sistema de chamados"
          />
        </LogoArea>

        <Form>
          <Title>
            {resetPassword ? "Recuperação de senha" : "Verificação de e-mail"}
          </Title>

          <Spacer spacing={6} />

          <Text>
            Um e-mail de{" "}
            {resetPassword ? "recuperação de senha" : "verificação"}{" "}
            foi enviado para <strong>{email}</strong>.{" "}
          </Text>

          <Spacer spacing={2} />

          <Text style={{ color: "#555" }}>
            Verifique o e-mail cadastrado para{" "}
            {resetPassword
              ? "recuperar a sua senha"
              : "concluir o seu registro"}
            .
          </Text>

          <Spacer spacing={6} />

          <DivButton to={"/"}>
            <FiArrowLeft style={{ display: "flex" }} />
            <Text style={{ margin: 0 }}>Login</Text>
          </DivButton>
        </Form>
      </ContainerForm>
    </Container>
  );
};

const Text = styled.p`
  text-align: center;
  font-size: 15px;
  margin: 0 20px;
`;

const DivButton = styled(Link)`
  align-items: center;
  display: flex;
  margin: 0 auto;
`;
