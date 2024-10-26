import styled from "styled-components";

export const Container = styled.div``;

export const GlobalContainer = styled.div`
  margin-left: 200px;
  padding: 1px 16px;

  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

export const GlobalContent = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 0.8em;
  align-items: center;
  margin-bottom: 1em;
`;

export const GlobalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GlobalLabel = styled.label`
  font-size: 1em;
  margin-bottom: 0.5em;
`;
