import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const Container = styled.div`
  background-color: red;
`;

export const ButtonNew = styled(Link)`
  float: right;
  margin-bottom: 1.5em;
  align-items: center;
  display: flex;
  background-color: green;
  border-radius: 4px;
  padding: 0.5em;
  color: white;
  justify-content: center;
`;

export const Table = styled.table`
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  table caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
  }

  th,
  td {
    padding: 0.62em;
    text-align: center;
  }

  th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  td .action {
    border: o;
    padding: 4px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 2px;
  }

  td .action svg {
    vertical-align: middle;
  }
`;

export const ActionButton = styled.button`
  border: 0;
  padding: 4px;
  border-radius: 4px;
  margin: 4px;

  @media screen and (max-width: 720px) {
    display: flex;
  }

  svg {
    align-items: center;
    justify-content: center;
    color: white;
  }
`;

export const IconAdd = styled(FiPlus)`
  color: white;
`;

export const Status = styled.span`
  background-color: green;
  padding: 4px;
  color: white;
  border-radius: 4px;

  @media screen and (max-width: 740px) {
    font-size: 13px;
  }
`;
