import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonAuth from "../../../components/ButtonAuth";
import { InputAuth } from "../../../components/InputAuth";
import { AuthContext } from "../../../contexts/auth";
import {
  Container,
  Form,
  Login,
  LoginArea,
  Logo,
  TextRecover,
  Title,
} from "../styled";

export const RecoverPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const schema = z.object({
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Digite um e-mail válido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = async (data) => {
    await resetPassword(data.email);
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

        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <Title>Recuperar senha</Title>

          <InputAuth
            placeholder="E-mail"
            type="email"
            id="email"
            required={true}
            register={register}
            errors={errors.email && errors.email?.message}
          />

          <ButtonAuth title={"Recuperar senha"} />
        </Form>

        <br />
        <TextRecover to={"/"} style={{ textAlign: "center" }}>
          Entrar
        </TextRecover>
        <br />
      </Login>
    </Container>
  );
};
