import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.6em;
  border: none;
  border-radius: var(--borda-radius);
  box-shadow: var(--sombra-padrao);
  color: ${(props) => (props.corBotao ? "var(--cor-branco)" : "#000")};
  background-color: ${(props) => props.corBotao};
  opacity: 1;
  cursor: pointer;
  transition: opacity 180ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.25s;
    color: ${(props) => (props.corBotaoHover ? props.corBotaoHover : "#000")};
  }
`;
