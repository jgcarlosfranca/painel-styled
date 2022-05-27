import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 7vh;
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom:  ${(props) => props.theme.colors.borderHeader};
`;
