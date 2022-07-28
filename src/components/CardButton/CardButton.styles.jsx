import styled from "styled-components";

export const StyledCardButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.tamanho};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.6em;
  color: ${(props) => props.theme.colors.text};
  opacity: 1;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: transform ease-in 0.5s;

  &:hover {
    color: ${(props) => props.theme.colors.text};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      background 0s, border 0s;
      box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor} inset;
    -webkit-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor} inset;
    -moz-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor} inset;
  }

  &:active {
    transition: transform ease-in 0.1s;
    transform: scale(0.9);
    box-shadow: 0 2px 25px ${(props) => props.theme.colors.primaryButtonColor} inset;
  }
`;
