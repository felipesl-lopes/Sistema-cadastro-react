import styled from "styled-components";
import React from "react";

const InputAuth = ({
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

const Container = styled.div`
  margin-bottom: 1.3rem;
`;

const Input = styled.input`
  height: 36px;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  background-color: #fff;
  max-width: 600px;
  margin-bottom: 2px;
`;

const Error = styled.p`
  font-size: 0.8em;
  color: #ff4d4f;
  margin-left: 2px;
  position: absolute;
`;

export default InputAuth;
