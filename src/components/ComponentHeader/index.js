import React, { useContext } from "react";
import { FiHome, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { AuthContext } from "../../contexts/auth";
import {
  ButtonLogout,
  Container,
  ContainerPhoto,
  Icon,
  Linki,
  Photo,
} from "./styled";

export const ComponentHeader = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    const confirm = window.confirm("Você deseja realmente sair?");

    if (confirm) {
      await logout();
    }
  };

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

      <ButtonLogout onClick={handleLogout}>
        <Icon>
          <FiLogOut size={22} />
        </Icon>
        Sair
      </ButtonLogout>
    </Container>
  );
};
