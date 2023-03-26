import React, { useState } from "react";
import {
  SlideWrapper,
  ImageBox,
  NavButton,
  ImageCaption,
} from "./Carrossel.styles";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export function Carrossel(props) {
  const [{ items, activeIndex }, setState] = useState({
    items: props.items,
    activeIndex: 0, // begin with the first item
  });

  const moveTo = (newIndex) => () => {
    if (newIndex === -1) {
      // jump from the first image to the last
      setState((s) => ({ ...s, activeIndex: items.length - 1 }));
      return;
    }
    if (newIndex === items.length) {
      // jump from the last image to the first
      setState((s) => ({ ...s, activeIndex: 0 }));
      return;
    }

    setState((s) => ({ ...s, activeIndex: newIndex }));
  };

  return (
    <SlideWrapper>
      <ImageBox>
        <img alt={items[activeIndex].caption} src={items[activeIndex].image} />
        <ImageCaption>{items[activeIndex].caption}</ImageCaption>
        <NavButton position="left" onClick={moveTo(activeIndex - 1)}>
          <BiLeftArrow />
        </NavButton>
        <NavButton position="right" onClick={moveTo(activeIndex + 1)}>
          <BiRightArrow />
        </NavButton>
      </ImageBox>
    </SlideWrapper>
  );
}
