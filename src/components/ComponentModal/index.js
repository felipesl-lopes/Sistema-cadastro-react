import React from "react";
import Modal from "react-modal";
import { formatedDate } from "../../functions/formatedDate";
import { returnColor } from "../../functions/returnColor";
import {
  ButtonClose,
  Container,
  ContainerButton,
  Content,
  ModalContainer,
  Overlay,
  Title,
} from "./styled";

Modal.setAppElement("#root");

export const ComponentModal = ({ isOpen, handleModal, detailCalled }) => {
  const date =
    detailCalled.created && formatedDate(detailCalled.created.seconds);

  return (
    <Overlay isOpen={isOpen} onRequestClose={handleModal}>
      <ModalContainer>
        <Title>Detalhes do chamado</Title>

        <Container>
          <Content>
            <strong>Cliente:</strong>
            <p>{detailCalled.customerName}</p>
          </Content>

          <Content>
            <strong>Registrado:</strong>
            <p>{date}</p>
          </Content>
        </Container>

        <Container>
          <Content>
            <strong>Assunto:</strong>
            <p>{detailCalled.subject}</p>
          </Content>

          <Content>
            <strong>Status:</strong>
            <p
              style={{
                backgroundColor: returnColor(detailCalled.status),
                padding: "2px",
                borderRadius: "2px",
                display: "inline-flex",
                color: "white",
              }}
            >
              {detailCalled.status}
            </p>
          </Content>
        </Container>

        {detailCalled.complement !== "" && (
          <>
            <strong>Complemento:</strong>
            <p>{detailCalled.complement}</p>
          </>
        )}

        <ContainerButton>
          <ButtonClose onClick={handleModal}>Fechar</ButtonClose>
        </ContainerButton>
      </ModalContainer>
    </Overlay>
  );
};
