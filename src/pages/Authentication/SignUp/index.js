import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonAuth from "../../../components/ButtonAuth";
import InputAuth from "../../../components/InputAuth";
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
  const { signUp } = useContext(AuthContext);

  const schema = z.object({
    name: z.string().min(1, "Campo obrigatório"),
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Digite um e-mail válido"),
    password: z
      .string()
      .min(1, "Campo obrigatório")
      .min(6, "Mínimo de 6 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = async (data) => {
    await signUp(data.name, data.email, data.password);
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
          <Title>Criar conta</Title>

          <InputAuth
            placeholder="Nome completo"
            type="text"
            id="name"
            required={true}
            register={register}
            errors={errors.name && errors.name?.message}
          />

          <InputAuth
            placeholder="E-mail"
            type="email"
            id="email"
            required={true}
            register={register}
            errors={errors.email && errors.email?.message}
          />

          <InputAuth
            placeholder="Senha"
            type="password"
            id="password"
            required={true}
            register={register}
            minLength={6}
            errors={errors.password && errors.password?.message}
          />

          <ButtonAuth title={"Cadastrar"} />
        </Form>

        <ButtonLink to={"/"}>Já possui uma conta? Faça o login</ButtonLink>
      </Login>
    </Container>
  );
};
