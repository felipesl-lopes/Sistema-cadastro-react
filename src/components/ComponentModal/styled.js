import styled from "styled-components";

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

export const ButtonClose = styled.button`
  position: fixed;
  top: 31%;
  padding: 2px 4px;
  right: 25%;
`;
