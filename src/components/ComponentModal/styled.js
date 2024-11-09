import styled from "styled-components";
import Modal from "react-modal";

export const Overlay = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  width: 70%;
  max-width: 460px;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 20px;
  font-size: 1.5em;

  @media screen and (max-width: 510px) {
    font-size: 1.3em;
  }
`;

export const Container = styled.div`
  margin: 6px 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  p {
    margin-left: 6px;
  }

  @media screen and (max-width: 450px) {
    display: block;

    p {
      margin-left: 0;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonClose = styled.button`
  padding: 2px 4px;
`;
