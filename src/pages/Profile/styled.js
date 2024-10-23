import styled from "styled-components";

export const Container = styled.div``;

export const DivContainer = styled.div`
  margin-left: 200px;
  padding: 1px 16px;

  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 0.8em;
  align-items: center;
  margin-bottom: 1em;
`;

export const FormProfile = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelAvatar = styled.label`
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const Span = styled.span`
  z-index: 10;
  position: absolute;
  opacity: 0.7;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
    transform: scale(1.3);
  }
`;

export const InputImg = styled.input`
  display: none;
`;

export const ImgProfile = styled.img`
  margin-bottom: 1em;
  border-radius: 50%;
  object-fit: cover;
`;

export const LabelInput = styled.label`
  font-size: 1em;
  margin-bottom: 0.3em;
`;

export const InputForm = styled.input`
  margin-bottom: 1em;
  padding: 0.4em;
  font-size: 1em;
  border-radius: 4px;
  border: 0;
  height: 36px;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const LogoutButton = styled.button`
  border: 1px solid #121212;
  background-color: transparent;
  border-radius: 4px;
  font-size: 15px;
  padding: 4px 10px;
`;
