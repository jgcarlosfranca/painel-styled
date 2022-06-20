import styled from "styled-components";

export const StyledLookButton = styled.div`
  color: "#fff";
  width: 30px;
  height: 30px;
  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;
