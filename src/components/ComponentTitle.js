import React from "react";
import styled from "styled-components";

export const ComponentTitle = ({ children, title }) => {
  return (
    <Container>
      {children}
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  margin: 1em 0;
  border-radius: 4px;
  padding: 0.8em;
`;

const Title = styled.h2`
  margin-left: 0.5em;
  font-size: 1.5em;
`;
