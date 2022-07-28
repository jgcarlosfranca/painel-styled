import PropTypes from "prop-types";
import React from "react";
import { StyledButton } from "./Button.styles";

export function Button(props) {
  const { onClick, titulo = "Botão", tamanho = "100px" } = props;

  return (
    <StyledButton onClick={onClick} tamanho={tamanho}>
      {titulo}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
