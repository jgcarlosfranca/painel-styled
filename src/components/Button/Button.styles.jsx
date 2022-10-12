import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.tamanho};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.6em;
  color: ${(props) => props.theme.colors.textLight};
  background-color: ${(props) => props.theme.colors.primaryButtonColor};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: transform ease-in 0.5s;

  &:hover {
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      background 0s, border 0s;
    box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
    -webkit-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
    -moz-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
  }

  &:active {
    transition: transform ease-in 0.1s;
    transform: scale(0.9);
    box-shadow: 0 2px 25px ${(props) => props.theme.colors.primaryButtonColor};
  }
`;
