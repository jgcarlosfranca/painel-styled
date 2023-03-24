import PropTypes from "prop-types";
import React from "react";
import { SlideWrapper, ImageBox, NavButton } from "./Carrossel.styles";
import shinjukuJapan from "../../assets/img/shinjuku-japan-night-tokyo.jpg";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export function Carrossel(props) {
  // const {

  // } = props;

  return (
    <SlideWrapper>
      <ImageBox>
        <img alt="" src={shinjukuJapan} />
        <NavButton position="left">
          <BiLeftArrow />
        </NavButton>
        <NavButton position="right">
          <BiRightArrow />
        </NavButton>
      </ImageBox>
    </SlideWrapper>
  );
}
