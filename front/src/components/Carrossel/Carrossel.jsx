import PropTypes from "prop-types";
import React from "react";
import { SlideWrapper, ImageBox } from "./Carrossel.styles";
import shinjukuJapan from "../../assets/img/shinjuku-japan-night-tokyo.jpg";

export function Carrossel(props) {
  // const {

  // } = props;

  return (
    <SlideWrapper>
      <ImageBox>
        <img alt="" src={shinjukuJapan} />
      </ImageBox>
    </SlideWrapper>
  );
}
