import styled from "styled-components";

export const Container = styled.div``;

export const Select = styled.select`
  margin-bottom: 1rem;
  height: 36px;
  border-radius: 4px;
  border: 0;
  padding: 4px;
  font-size: 15px;
  background-color: #fff;
  max-width: 600px;
`;

export const Status = styled.div`
  margin-bottom: 1em;

  &:span {
    padding-left: 0.5em;
    font-size: 1.3em;
  }

  input[type="radio"] {
    margin-bottom: 15px;
    margin-right: 0.3em;
  }

  input[type="radio"]:not(:first-child) {
    margin-left: 15px;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 100px;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 0;
  padding: 4px;
  font-size: 15px;
  background-color: #fff;
  max-width: 600px;

  &::placeholder {
    color: #aaa;
  }
`;

export const InputLoading = styled.input`
  margin-bottom: 1rem;
  height: 36px;
  border-radius: 4px;
  border: 0;
  padding: 4px;
  font-size: 15px;
  background-color: #fff;
  max-width: 600px;
`;

export const Loading = styled.p`
  width: 100%;
  border-radius: 4px;
  display: flex;
  padding: 40px 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`;
