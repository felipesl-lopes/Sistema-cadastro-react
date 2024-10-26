import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import { ButtonAuth } from "../../components/ButtonAuth";
import { ComponentHeader } from "../../components/ComponentHeader";
import { ComponentTitle } from "../../components/ComponentTitle";
import { InputAuth } from "../../components/InputAuth";
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
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [address, setAddress] = useState("");
  const { setLoadingAuth } = useContext(AuthContext);

  const handleRegister = async () => {
    if (name !== "" && cnpj !== "" && address !== "") {
      setLoadingAuth(true);
      await addDoc(collection(db, "customers"), {
        fantasyName: name,
        cnpj: cnpj,
        address: address,
      })
        .then(() => {
          toast.success("Cliente cadastrado com sucesso!");
          setName("");
          setCnpj("");
          setAddress("");
        })
        .catch(() => {
          toast.error("Erro ao cadastrar cliente. Tente novamente.");
        })
        .finally(() => {
          setLoadingAuth(false);
        });
    } else {
      toast.error("Preencha todos os campos.");
    }
  };

  return (
    <Container>
      <ComponentHeader />

      <GlobalContainer>
        <ComponentTitle title="Clientes">
          <FiUser size={20} />
        </ComponentTitle>

        <GlobalContent>
          <GlobalForm
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <GlobalLabel>Nome fantasia</GlobalLabel>
            <InputAuth
              value={name}
              onChange={setName}
              placeholder="Nome da empresa"
            />

            <GlobalLabel>CNPJ</GlobalLabel>
            <InputAuth
              value={cnpj}
              onChange={setCnpj}
              placeholder="CNPJ da empresa"
            />

            <GlobalLabel>Endereço</GlobalLabel>
            <InputAuth
              value={address}
              onChange={setAddress}
              placeholder="Endereço da empresa"
            />

            <ButtonAuth title="Cadastrar" />
          </GlobalForm>
        </GlobalContent>
      </GlobalContainer>
    </Container>
  );
};
