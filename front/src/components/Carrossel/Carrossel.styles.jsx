import styled from "styled-components";

export const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 40vh;
`;

export const ImageBox = styled.div`
  position: relative;
  background-color: #343434;
  width: 100%;
  height: 85%;

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
