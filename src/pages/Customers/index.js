import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import { z } from "zod";
import ButtonAuth from "../../components/ButtonAuth";
import { ComponentHeader } from "../../components/ComponentHeader";
import { ComponentTitle } from "../../components/ComponentTitle";
import InputAuth from "../../components/InputAuth";
import { AuthContext } from "../../contexts/auth";
import { db } from "../../services/firebaseConnection";
import {
  Container,
  GlobalContainer,
  GlobalContent,
  GlobalForm,
  GlobalLabel,
} from "../../styles/globalStyles";

export const Customers = () => {
  const { setLoadingAuth } = useContext(AuthContext);

  const schema = z.object({
    name: z.string().min(1, "Campo obrigatório"),
    cnpj: z
      .string()
      .min(1, "Campo obrigatório")
      .regex(/^\d+$/, "O CNPJ deve conter apenas números")
      .min(14, "O CNPJ deve ter exatamente 14 dígitos")
      .max(14, "O CNPJ deve ter exatamente 14 dígitos"),
    address: z.string().min(1, "Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleRegister = async (data) => {
    setLoadingAuth(true);
    await addDoc(collection(db, "customers"), {
      fantasyName: data.name,
      cnpj: data.cnpj,
      address: data.address,
    })
      .then(() => {
        toast.success("Cliente cadastrado com sucesso!");
        reset();
      })
      .catch(() => {
        toast.error("Erro ao cadastrar cliente. Tente novamente.");
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  };

  return (
    <Container>
      <ComponentHeader />

      <GlobalContainer>
        <ComponentTitle title="Clientes">
          <FiUser size={20} />
        </ComponentTitle>

        <GlobalContent>
          <GlobalForm onSubmit={handleSubmit(handleRegister)}>
            <GlobalLabel>Nome fantasia</GlobalLabel>

            <InputAuth
              placeholder="Nome da empresa"
              type="text"
              id="name"
              required={true}
              register={register}
              errors={errors.name && errors.name?.message}
            />

            <GlobalLabel>CNPJ</GlobalLabel>

            <InputAuth
              placeholder="CNPJ da empresa"
              type="text"
              id="cnpj"
              required={true}
              register={register}
              errors={errors.cnpj && errors.cnpj?.message}
            />

            <GlobalLabel>Endereço</GlobalLabel>

            <InputAuth
              placeholder="Endereço da empresa"
              type="text"
              id="address"
              required={true}
              register={register}
              errors={errors.address && errors.address?.message}
            />

            <ButtonAuth title="Cadastrar" />
          </GlobalForm>
        </GlobalContent>
      </GlobalContainer>
    </Container>
  );
};
