import React from "react";
import Modal from "react-modal";
import { formatedDate } from "../../functions/formatedDate";
import { ButtonClose, Container, Content, Title } from "./styled";
import { returnColor } from "../../functions/returnColor";

Modal.setAppElement("#root");

export const ComponentModal = ({ isOpen, handleModal, detailCalled }) => {
  const date =
    detailCalled.created && formatedDate(detailCalled.created.seconds);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModal}
      style={{
        content: { height: "30%", width: "50%", margin: "auto", padding: 10 },
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
    >
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

      <ButtonClose onClick={handleModal}>Fechar X</ButtonClose>
    </Modal>
  );
};
