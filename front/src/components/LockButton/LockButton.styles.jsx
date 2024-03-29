import styled from "styled-components";

export const StyledLookButton = styled.div`
  color: "#fff";
  width: 45px;
  height: 45px;
  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;
