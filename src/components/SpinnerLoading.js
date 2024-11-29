import React from "react";
import styled, { keyframes } from "styled-components";

export const SpinnerLoading = ({ size }) => {
  return (
    <Spinner
      style={{
        height: size,
        width: size,
      }}
    ></Spinner>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 2px solid #ccc;
  border-top: 2px solid #0000cd;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`;
