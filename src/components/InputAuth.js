import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styled from "styled-components";

export const InputAuth = ({
  placeholder,
  type,
  id,
  required,
  register,
  errors,
  minLength,
  ...children
}) => {
  return (
    <Container>
      <ContainerInput style={{ border: errors && "solid 2px #ff3030" }}>
        <Input
          placeholder={placeholder}
          type={type}
          id={id}
          {...register(id, { required: required, minLength: minLength })}
          {...children}
        />
      </ContainerInput>
      <Error>{errors || "\u00A0"}</Error>
    </Container>
  );
};

export const InputAuthPassword = ({
  placeholder,
  id,
  required,
  register,
  errors,
  minLength,
  ...children
}) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <ContainerInput style={{ border: errors && "solid 2px #ff3030" }}>
        <Input
          placeholder={placeholder}
          type={visible ? "text" : "password"}
          id={id}
          {...register(id, { required: required, minLength: minLength })}
          {...children}
        />
        <StyledIcon onClick={handleVisible}>
          {visible ? <FiEye /> : <FiEyeOff />}
        </StyledIcon>
      </ContainerInput>
      <Error>{errors || "\u00A0"}</Error>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 4px;
`;

const ContainerInput = styled.div`
  border-radius: 4px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  border: 2px transparent solid;
  margin-bottom: 2px;

  &:focus-within {
    border: 2px solid #4a90e2;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  border: none;
  outline: none;
  padding: 8px;
  background-color: transparent;
  appearance: none;

  &:-webkit-autofill {
    background-color: transparent !important;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
  }
`;

const StyledIcon = styled.div`
  cursor: pointer;
  padding: 0 12px;

  svg {
    display: flex;
    bottom: auto;
    color: #777;
  }
`;

const Error = styled.p`
  font-size: 13px;
  color: #ff4d4f;
  margin-left: 2px;

  @media (max-width: 300px) {
    font-size: 11px;
  }
`;
