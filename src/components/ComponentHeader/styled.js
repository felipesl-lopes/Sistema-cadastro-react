import { Link } from "react-router-dom";
import styled from "styled-components";
import coverImg from "../../assets/cover.png";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #181c2e;
  position: fixed;
  height: 100vh;
  overflow: auto;
  width: 200px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const ContainerPhoto = styled.div`
  background: url(${coverImg});
  background-color: #181c2e;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
  padding-top: 30px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Photo = styled.img`
  width: 90px;
  height: 90px;
  display: block;
  margin: auto;
  border-radius: 50%;
  object-fit: cover;
  filter: drop-shadow(2px 3px 6px #121212);
  -webkit-filter: drop-shadow(2px 3px 6px #121212);
`;

export const Linki = styled(Link)`
  display: block;
  padding: 16px;
  display: flex;
  text-decoration: none;
  color: rgba(235, 255, 255, 0.7);
  flex-direction: row;
  align-items: center;
  transition: ease-in-out 0.4s;
  font-size: 1em;

  &:hover {
    background-color: #121212;
    color: #fff;
  }

  @media screen and (max-width: 700px) {
    float: left;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
    float: none;
  }
`;

export const Icon = styled.div`
  margin-right: 0.5rem;

  svg {
    color: white;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;

export const ButtonLogout = styled.button`
  display: block;
  padding: 16px;
  display: flex;
  text-decoration: none;
  color: rgba(235, 255, 255, 0.7);
  flex-direction: row;
  align-items: center;
  transition: ease-in-out 0.4s;
  border: 0;
  background-color: transparent;
  width: 100%;
  font-size: 1em;

  &:hover {
    background-color: #121212;
    color: #fff;
  }

  @media screen and (max-width: 700px) {
    float: left;
    width: auto;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
    float: none;
    width: 100%;
  }

  svg {
    color: white;

    @media screen and (max-width: 700px) {
      display: flex;
    }
  }
`;
