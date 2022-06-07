import styled from "styled-components";

export const StyledSideBar = styled.div`
  height: 100vh;
  position: relative;
  background-color: rgb(208, 207, 207);
  width: 10%;
  min-width: 170px;
`;

//${(props) => props.theme.colors.header};
export const StyledSideBarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

export const StyledSideBarMenu = styled.div`
  margin-bottom: 10px;
`;

export const StyledSideBarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

export const StyledSideBarItem = styled.li`
  padding: 15px 20px 20px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 25px !important;
  &:hover {
    background-color: rgb(93, 192, 93);
    color: aliceblue;
  }
`;
