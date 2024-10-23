import React from "react";
import { Container, ContainerPhoto, Icon, Linki, Photo } from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";

export const ComponentHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <ContainerPhoto>
        <Photo
          src={
            user.avatarUrl ? user.avatarUrl : require("../../assets/avatar.png")
          }
        />
      </ContainerPhoto>

      <Linki to={"/dashboard"}>
        <Icon>
          <FiHome size={20} />
        </Icon>
        Chamados
      </Linki>

      <Linki to={"/customers"}>
        <Icon>
          <FiUser size={22} />
        </Icon>
        Clientes
      </Linki>

      <Linki to={"/profile"}>
        <Icon>
          <FiSettings size={22} />
        </Icon>
        Perfil
      </Linki>
    </Container>
  );
};
