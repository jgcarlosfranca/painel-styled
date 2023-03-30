import styled, { css } from "styled-components";

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 40vh;
`;

export const ImageBox = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.contrastBackgroud};
  width: 100%;
  height: 95%;

  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 45%;
  padding: 5px;
  border-radius: 3px;
  border: none;
  background: rgba(255, 255, 255, 0.411);

  ${({ position }) =>
    position === "left" &&
    css`
      left: 10px;
    `}

  ${({ position }) =>
    position === "right" &&
    css`
      right: 10px;
    `}
`;

export const ImageCaption = styled.span`
  width: 100%;
  text-align: center;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  padding: 8px;
  background: rgba(255, 255, 255, 0.7);
`;