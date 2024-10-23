import React, { useContext } from "react";
import { FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";
import { ComponentHeader } from "../../components/ComponentHeader";
import { ComponentTitle } from "../../components/ComponentTitle";
import { AuthContext } from "../../contexts/auth";
import { Container, DivContainer } from "../../styles/globalStyles";
import { ActionButton, ButtonNew, IconAdd, Status, Table } from "./styled";

export const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Container>
      <ComponentHeader />

      <DivContainer>
        <ComponentTitle title="Tickets">
          <FiMessageSquare size={20} />
        </ComponentTitle>

        <>
          <ButtonNew>
            <IconAdd />
            Novo chamado
          </ButtonNew>
        </>

        <button onClick={async () => await logout()}>Deslogar</button>

        <Table>
          <thead>
            <tr>
              <th scope="col">Cliente</th>
              <th scope="col">Assunto</th>
              <th scope="col">Status</th>
              <th scope="col">Cadastrado em</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Cliente">Mercado Afonso</td>
              <td data-label="Assunto">Suporte</td>
              <td data-label="Status">
                <Status>Em aberto</Status>
              </td>
              <td data-label="Cadastrado">22/10/2024</td>
              <td data-label="#">
                <ActionButton style={{ backgroundColor: "#3583f6" }}>
                  <FiSearch size={17} />
                </ActionButton>
                <ActionButton style={{ backgroundColor: "#f6a935" }}>
                  <FiEdit2 size={17} />
                </ActionButton>
              </td>
            </tr>

            <tr>
              <td data-label="Cliente">Farmácia Salomão</td>
              <td data-label="Assunto">Suporte</td>
              <td data-label="Status">
                <Status>Em aberto</Status>
              </td>
              <td data-label="Cadastrado">22/10/2024</td>
              <td data-label="#">
                <ActionButton style={{ backgroundColor: "#3583f6" }}>
                  <FiSearch size={17} />
                </ActionButton>
                <ActionButton style={{ backgroundColor: "#f6a935" }}>
                  <FiEdit2 size={17} />
                </ActionButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </DivContainer>
    </Container>
  );
};
