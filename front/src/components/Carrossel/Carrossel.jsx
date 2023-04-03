import React, { useState, useEffect } from "react";
import {
  SlideWrapper,
  ImageBox,
  NavButton,
  ImageCaption,
  Image,
  FadeInImage,
  FadeOutImage,
} from "./Carrossel.styles";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export function Carrossel(props) {
  const [{ items, activeIndex }, setState] = useState({
    items: props.items,
    activeIndex: 0, // begin with the first item
  });
  const [nextActiveIndex, setNextActiveIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  const moveTo = (newIndex) => () => {
    setIsFading(true);
    if (newIndex === -1) {
      // jump from the first image to the last
      setState((s) => ({
        ...s,
        activeIndex: items.length - 1,
      }));
      setNextActiveIndex(items.length);
      setIsFading(false);
      return;
    }
    if (newIndex === items.length) {
      // jump from the last image to the first
      setState((s) => ({ ...s, activeIndex: 0 }));
      setNextActiveIndex(1);
      setIsFading(false);
      return;
    }

    if (newIndex + 1 === items.length) {
      // jump from the last image to the first
      setState((s) => ({
        ...s,
        activeIndex: newIndex,
      }));
      setNextActiveIndex(0);
      setIsFading(false);
      return;
    }
    setState((s) => ({
      ...s,
      activeIndex: newIndex,
    }));
    setNextActiveIndex(newIndex + 1);
  };

  return (
    <SlideWrapper>
      <ImageBox>
        {/* <Image
          alt={items[activeIndex].caption}
          src={items[activeIndex].image}
        /> */}
        {isFading ? (
          <>
            <FadeOutImage
              src={items[activeIndex].image}
              alt={items[activeIndex].caption}
            />
            <FadeInImage
              src={items[nextActiveIndex].image}
              alt={items[nextActiveIndex].caption}
            />
          </>
        ) : (
          <FadeInImage
            src={items[activeIndex].image}
            alt={items[activeIndex].caption}
          />
        )}
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
