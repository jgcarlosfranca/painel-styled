import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 7vh;
  min-height: 50px;
  width: 90%;
  position: sticky;
  top: 1vh;
  background: ${(props) => props.theme.colors.sidebarBackgroud}; //header
  color: ${(props) => props.theme.colors.textLight};
  display: flex;
  align-items: center;

  padding: 0 30px;
  border-bottom: ${(props) => props.theme.colors.borderHeader};
  justify-content: flex-end;
  margin-top: 1vh;

  border-radius: 40px 40px 40px 40px;
  button {
    width: 45px;
    height: 45px;
    &:hover {
      background-color: ${(props) => props.theme.colors.hoverLockButton};
      transition: 0.3s;
    }
  }
`;
