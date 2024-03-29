import styled from "styled-components";

export const StyledGlassEffectConteiner = styled.div`
  z-index: 0;
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  height: 6.5rem;
  background-color: ${(props) => props.theme.colors.glassBackGround};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;
