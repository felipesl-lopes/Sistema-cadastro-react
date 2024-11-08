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
  Login,
  LoginArea,
  Logo,
  TextRecover,
  Title,
} from "../styled";

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
    await signIn(data.email, data.password);
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
          <Title>Entrar</Title>

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

          <TextRecover
            style={{ alignSelf: "flex-start" }}
            to={"/recoverPassword"}
          >
            Esqueceu sua senha?
          </TextRecover>

          <ButtonAuth title={"Acessar"} />
        </Form>

        <TextNav
          title={"Não possui conta?"}
          titleLink={"Crie uma conta"}
          link={"/register"}
        />
      </Login>
    </Container>
  );
};
