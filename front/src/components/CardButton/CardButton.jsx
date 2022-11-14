import PropTypes from "prop-types";
import React from "react";
import { StyledCardButton } from "./CardButton.styles";

export function CardButton(props) {
  const { onClick, image = "Botão", tamanho = "100px" } = props;

  const imageTamanho =
    Number(tamanho.replace(/\D/g, "") - tamanho.replace(/\D/g, "") * 0.3) +
    "px";

  return (
    <StyledCardButton onClick={onClick} tamanho={tamanho}>
      <img src={image} width={imageTamanho} height={imageTamanho}></img>
    </StyledCardButton>
  );
}

CardButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
