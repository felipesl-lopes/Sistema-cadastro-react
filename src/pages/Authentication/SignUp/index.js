import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonAuth from "../../../components/ButtonAuth";
import { InputAuth, InputAuthPassword } from "../../../components/InputAuth";
import { Spacer } from "../../../components/Spacer";
import { TextNav } from "../../../components/TextNav";
import { AuthContext } from "../../../contexts/auth";
import {
  Container,
  ContainerForm,
  Form,
  Logo,
  LogoArea,
  Title,
} from "../styled";

export const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const schema = z
    .object({
      name: z.string().min(1, "Campo obrigatório"),
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
      passwordConfirm: z
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
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "As senhas não coincidem",
      path: ["passwordConfirm"],
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
      <ContainerForm>
        <LogoArea>
          <Logo
            src={require("../../../assets/logo.png")}
            alt="Logo do sistema de chamados"
          />
        </LogoArea>

        <Form onSubmit={handleSubmit(handleSubmitForm)}>
          <Title>Criar conta</Title>

          <Spacer spacing={4} />

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

          <InputAuthPassword
            placeholder="Senha"
            id="password"
            required={true}
            register={register}
            minLength={6}
            errors={errors.password && errors.password?.message}
          />

          <InputAuthPassword
            placeholder="Confirme a senha"
            id="passwordConfirm"
            required={true}
            register={register}
            minLength={6}
            errors={errors.passwordConfirm && errors.passwordConfirm?.message}
          />

          <Spacer spacing={4} />

          <ButtonAuth title={"Cadastrar"} />

          <Spacer spacing={4} />

          <TextNav
            title={"Já possui uma conta?"}
            titleLink={"Faça o login"}
            link={"/"}
          />
        </Form>
      </ContainerForm>
    </Container>
  );
};
