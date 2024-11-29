import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonAuth from "../../../components/ButtonAuth";
import { InputAuth } from "../../../components/InputAuth";
import { Spacer } from "../../../components/Spacer";
import { AuthContext } from "../../../contexts/auth";
import {
  Container,
  ContainerForm,
  Form,
  Logo,
  LogoArea,
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
      <ContainerForm>
        <LogoArea>
          <Logo
            src={require("../../../assets/logo.png")}
            alt="Logo do sistema de chamados"
          />
        </LogoArea>

        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <Title>Recuperação de senha</Title>

          <Spacer spacing={4} />

          <InputAuth
            placeholder="E-mail"
            type="email"
            id="email"
            required={true}
            register={register}
            errors={errors.email && errors.email?.message}
          />

          <Spacer spacing={5} />

          <ButtonAuth title={"Enviar"} />

          <Spacer spacing={4} />

          <TextRecover to={"/"} style={{ textAlign: "center" }}>
            Login
          </TextRecover>
        </Form>
      </ContainerForm>
    </Container>
  );
};
