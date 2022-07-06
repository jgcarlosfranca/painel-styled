import PropTypes from "prop-types";
import React from "react";
import { StyledButton } from "./Button.styles";

export function Button(props) {
  const { onClick, titulo = "Botão", cor, corHover } = props;

  return (
    <StyledButton corBotao={cor} corBotaoHover={corHover} onClick={onClick}>
      {titulo}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
