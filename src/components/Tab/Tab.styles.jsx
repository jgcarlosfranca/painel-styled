import styled from "styled-components";

export const StyledTab = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  background: ${(props) => props.theme.colors.sidebarBackgroud};
  margin: 1.5rem auto 0.5rem;
  padding: 2rem 1rem;
  color: #e8f0f2;
  border-radius: 1rem;

  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`;

export const StyledTabUl = styled.ul`
  width: 60%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
  }

  li {
    width: 50%;
    padding: 1rem;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
  }

  li:nth-child(n) {
    background-color: ${(props) => props.theme.colors.primaryButtonColor};
    margin: 5px;
    border-radius: 5px;
  }

  li:hover {
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      background 0s, border 0s;
    box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
    -webkit-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
    -moz-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
  }

  li.active {
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      background 0s, border 0s;
    box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
    -webkit-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
    -moz-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
  }
`;

export const StyledTabBody = styled.div`
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0s,
    border 0s;
  width: 100%;
  height: auto;
  min-height: 400px;
  color: ${(props) => props.theme.colors.primaryButtonColor};
`;
