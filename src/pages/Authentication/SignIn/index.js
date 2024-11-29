import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonAuth from "../../../components/ButtonAuth";
import { InputAuth, InputAuthPassword } from "../../../components/InputAuth";
import { TextNav } from "../../../components/TextNav";
import { AuthContext } from "../../../contexts/auth";
import {
  Container,
  Form,
  ContainerForm,
  LogoArea,
  Logo,
  TextRecover,
  Title,
} from "../styled";
import { Spacer } from "../../../components/Spacer";

export const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const schema = z.object({
    email: z
      .string()
      .min(1, "Campo obrigatório")
      .email("Digite um e-mail válido"),
    password: z
      .string()
      .min(1, "Campo obrigatório")
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .max(20, "A senha deve ter no máximo 20 caracteres")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/\d/, "A senha deve conter pelo menos um número")
      .regex(
        /[@$!%*?&#]/,
        "A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, &, #)"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = async (data) => {
    await signIn(data.email, data.password);
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
          <Title>Entrar</Title>

          <Spacer spacing={4} />

          <InputAuth
            placeholder="E-mail"
            type="email"
            id="email"
            required={true}
            register={register}
            errors={errors.email && errors.email?.message}
          />

          <InputAuthPassword
            placeholder="Senha"
            id="password"
            required={true}
            register={register}
            minLength={6}
            errors={errors.password && errors.password?.message}
          />

          <Spacer spacing={1} />

          <TextRecover
            style={{ alignSelf: "flex-start" }}
            to={"/recoverPassword"}
          >
            Esqueceu sua senha?
          </TextRecover>

          <Spacer spacing={6} />

          <ButtonAuth title={"Acessar"} />

          <Spacer spacing={4} />

          <TextNav
            title={"Não possui conta?"}
            titleLink={"Crie uma conta"}
            link={"/register"}
          />
        </Form>
      </ContainerForm>
    </Container>
  );
};
