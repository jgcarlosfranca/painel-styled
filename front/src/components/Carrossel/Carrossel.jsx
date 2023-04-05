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
  const [outActiveIndex, setOutActiveIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  const moveTo = (newIndex, diretion) => () => {
    setIsFading(true);
    if (newIndex === -1) {
      // jump from the first image to the last
      setState((s) => ({
        ...s,
        activeIndex: items.length - 1,
      }));
      setOutActiveIndex(0);
      setIsFading(false);
      console.log(
        `🚀 ~ file: teste(newIndex === -1) newIndex: ${newIndex}, activeIndex: ${activeIndex}, outActiveIndex: ${outActiveIndex} `
      );
      return;
    }
    if (newIndex === items.length) {
      // jump from the last image to the first
      setState((s) => ({ ...s, activeIndex: 0 }));
      setOutActiveIndex(items.length - 1);
      setIsFading(false);
      console.log(
        `🚀 ~ file: teste(newIndex === items.length) newIndex: ${newIndex}, activeIndex: ${activeIndex}, outActiveIndex: ${outActiveIndex} `
      );
      return;
    }

    if (newIndex + 1 === items.length) {
      setState((s) => ({
        ...s,
        activeIndex: newIndex,
      }));
      setOutActiveIndex(0);
      setIsFading(false);
      console.log(
        `🚀 ~ file: teste(newIndex + 1 === items.length) newIndex: ${newIndex}, activeIndex: ${activeIndex}, outActiveIndex: ${outActiveIndex} `
      );
      return;
    }
    setState((s) => ({
      ...s,
      activeIndex: newIndex,
    }));
    setOutActiveIndex(newIndex - 1);
    console.log(
      `🚀 ~ file: newIndex: ${newIndex}, activeIndex: ${activeIndex}, outActiveIndex: ${outActiveIndex} `
    );
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
              src={items[outActiveIndex].image}
              alt={items[outActiveIndex].caption}
            />
            <FadeInImage
              src={items[activeIndex].image}
              alt={items[activeIndex].caption}
            />
          </>
        ) : (
          <FadeInImage
            src={items[activeIndex].image}
            alt={items[activeIndex].caption}
          />
        )}
        <ImageCaption>{items[activeIndex].caption}</ImageCaption>
        <NavButton
          position="left"
          onClick={moveTo(activeIndex - 1, "backward")}
        >
          <BiLeftArrow />
        </NavButton>
        <NavButton
          position="right"
          onClick={moveTo(activeIndex + 1, "forward")}
        >
          <BiRightArrow />
        </NavButton>
      </ImageBox>
    </SlideWrapper>
  );
}
