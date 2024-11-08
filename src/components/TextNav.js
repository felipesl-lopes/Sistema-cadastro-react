import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TextNav = ({ title, titleLink, link }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <TextButton to={link}>{titleLink}</TextButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-self: center;
  margin: 1rem 0;

  @media screen and (max-width: 340px) {
    display: inline-block;
    text-align: center;
  }
`;

const Text = styled.p``;

const TextButton = styled(Link)`
  margin-left: 4px;

  @media screen and (max-width: 340px) {
    margin: 0;
    display: inline-flex;
    padding-top: 4px;
  }
`;
