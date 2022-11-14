import styled from "styled-components";

export const StyledFormGroup = styled.div`
  width: ${(props) =>
    props.children[1].props.tamanhoInput
      ? props.children[1].props.tamanhoInput
      : "45%"};
  display: flex;
  flex-direction: column;
  margin: 0.75em 0;
  padding: 0 20px 0 20px;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: var(--cor-secundaria);
`;

export const StyledInput = styled.input`
  font-size: 1.05rem;
  min-height: 15px;
  padding: 0.5em;
  border: var(--borda-padrao);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
`;

export const StyledErrorLabel = styled.label`
  color: var(--cor-secundaria);
`;