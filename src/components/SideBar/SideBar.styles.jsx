import styled from "styled-components";

export const StyledSideBar = styled.div`
  height: 100vh;
  position: sticky;
  top: 0%;
  left: 0%;
  background-color: ${(props) => props.theme.colors.sidebarBackgroud};
  width: 15%;
  min-width: 255px;
  overflow-y: scroll;
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

export const StyledSideBarHeader = styled.div`
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: default;
`;

export const StyledSideBarWrapper = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export const StyledSideBarMenu = styled.div`
  margin-bottom: 10px;
`;

export const StyledSideBarList = styled.ul`
  list-style: none;
  padding: 5px;
  font-size: 50px;
`;

export const StyledSideBarItem = styled.li`
  padding: 15px 20px 20px 15px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  font-size: 20px !important;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.text};
    padding: 15px 30px 20px 25px;
    transition: ease 0.3s;
  }
`;

export const StyledSideBarBodyList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const StyledSideBarLinkName = styled.div`
  display: flex;
  padding: 10px;
  font-size: 20px;
`;

export const StyledSideBarTextConteiner = styled.div`
  display: flex;
  padding: 10px;
  font-size: 20px;
  &:hover {
    color: ${(props) => props.theme.colors.header};
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
