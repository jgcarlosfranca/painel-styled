import styled from "styled-components";

export const StyledSlimSideBar = styled.div`
  z-index: 990;
  height: 100vh;
  position: sticky;
  top: 0%;
  left: 0%;
  background-color: ${(props) => props.theme.colors.sidebarBackgroud};
  width: 5%;
  min-width: 125px;
  overflow-y: scroll;
  transition: linear 0.5s;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.sidebarBackgroud};
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.colors.sideBarThumb};
    border-radius: 100px;
  }
  a {
    text-decoration: none;
  }
`;

export const StyledSlimSideBarHeader = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const StyledSlimSideBarLockIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 5px;
  padding: 5px 0px 5px 50px;
`;

export const StyledSlimSideBarWrapper = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export const StyledSlimSideBarMenu = styled.div`
  margin-bottom: 10px;
`;

export const StyledSlimSideBarList = styled.ul`
  list-style: none;
  padding: 5px;
  font-size: 50px;
`;

export const StyledSlimSideBarItem = styled.li`
  padding: 15px 7px 7px 1px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  font-size: 27px !important;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.text};
    padding: 15px 15px 7px 5px;
    transition: ease 0.3s;
  }
`;

export const StyledSlimSideBarBodyList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const StyledSlimSideBarLinkName = styled.div`
  display: flex;
  padding: 10px;
  font-size: 20px;
`;

export const StyledSlimSideBarTextConteiner = styled.div`
  display: flex;

  font-size: 15px;
  &:hover {
    color: ${(props) => props.theme.colors.header};
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
