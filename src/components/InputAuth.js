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
      <Input
        style={{ border: errors ? "2px solid #ff4d4f" : 0 }}
        placeholder={placeholder}
        type={type}
        id={id}
        {...register(id, { required: required, minLength: minLength })}
        {...children}
      />
      {errors && <Error>{errors}</Error>}
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
      <>
        <Input
          style={{ border: errors ? "2px solid #ff4d4f" : 0 }}
          placeholder={placeholder}
          type={visible ? "text" : "password"}
          id={id}
          {...register(id, { required: required, minLength: minLength })}
          {...children}
        />
        <StyledIcon onClick={handleVisible}>
          {visible ? <FiEye /> : <FiEyeOff />}
        </StyledIcon>
      </>
      {errors && <Error>{errors}</Error>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-bottom: 1.3rem;
  max-width: 600px;
`;

const Input = styled.input`
  height: 36px;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  padding-right: 40px;
  font-size: 15px;
  background-color: #fff;
  margin-bottom: 2px;
`;

const Error = styled.p`
  font-size: 0.8em;
  color: #ff4d4f;
  margin-left: 2px;
  position: absolute;
`;

const StyledIcon = styled.div`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
  font-size: 18px;
  pointer-events: auto;

  svg {
    display: flex;
    margin: 6px;
  }
`;
