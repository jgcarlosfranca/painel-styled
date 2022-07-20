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
