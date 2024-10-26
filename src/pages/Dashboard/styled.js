import { Link } from "react-router-dom";
import styled from "styled-components";

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
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  }

  svg {
    color: white;
    font-size: 17px;
    margin-right: 2px;
  }
`;

export const Table = styled.table`
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  caption {
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

  @media screen and (max-width: 500px) {
    border: 0;

    caption {
      font-size: 1.3em;
    }

    thead {
      border: none;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 4px solid #ddd;
      display: block;
      margin-bottom: 0.6em;
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const ActionButton = styled(Link)`
  border: 0;
  padding: 4px;
  border-radius: 4px;
  margin: 4px;
  display: inline-block;

  svg {
    display: flex;
    color: white;
  }
`;

export const Status = styled.span`
  background-color: green;
  padding: 2px 4px;
  color: white;
  border-radius: 3px;

  @media screen and (max-width: 740px) {
    font-size: 13px;
  }
`;

export const NotCalled = styled.p`
  width: 100%;
  border-radius: 4px;
  display: flex;
  padding: 40px 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`;

export const ButtonMore = styled.button`
  background-color: #fff;
  font-size: 0.9em;
  border-radius: 4px;
  border-width: 1px;
  padding: 2px 4px;
  margin-top: 16px;
  display: flex;
  margin-left: auto;
  margin-right: 4px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  &:active {
    transform: translate(1px, 1px);
  }
`;
