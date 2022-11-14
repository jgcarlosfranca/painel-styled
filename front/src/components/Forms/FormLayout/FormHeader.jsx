import React from "react";
import PropTypes from "prop-types";

export const FormHeader = ({
  titulo = "",
  subtitulo = "",

}) => {
  return (
    <header className="header__title">
      <h2 className="header__title header__title--primary ">{titulo}</h2>
      <span className="header__subtitle header__subtitle--secondary" >
        {subtitulo}
      </span>
    </header>
  );
};

FormHeader.propTypes = {
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
};
