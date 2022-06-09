import styled from "styled-components";

export const StyledSideBar = styled.div`
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.colors.sidebarBackgroud};
  width: 15%;
  min-width: 255px;
`;

//${(props) => props.theme.colors.sidebarBackgroud};
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
  &:hover {
    color: ${(props) => props.theme.colors.text}; 
    padding: 15px 30px 20px 25px;
  }
`;
