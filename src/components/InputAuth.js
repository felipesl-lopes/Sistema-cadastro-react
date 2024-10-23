import styled from "styled-components";
import React from "react";

export const InputAuth = ({ value, onChange, ...children }) => {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...children}
    />
  );
};

const Input = styled.input`
  margin-bottom: 1rem;
  height: 36px;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  font-size: 15px;
  background-color: #fff;
  max-width: 600px;
`;
