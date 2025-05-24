import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  color: #fff;
  min-width: 220px;
  border: none;
  font-size: 19px;
  transition: 0.4s background ease-in;

  &:hover {
    cursor: pointer;
    background: #2e2e2e;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #fff;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
