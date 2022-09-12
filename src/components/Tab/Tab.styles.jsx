import styled from "styled-components";

export const StyledTab = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  background: ${(props) => props.theme.colors.sidebarBackgroud};
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
  padding: 1.2rem 1rem;
  color: ${(props) => props.theme.colors.text};
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 1600px) {
    padding: 2rem 0;
  }
`;

export const StyledTabUl = styled.ul`
  width: 60%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    width: 90%;
  }

  li {
    width: 50%;
    padding: 0.9rem;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    color: ${(props) => props.theme.colors.text};
  }

  li:nth-child(n) {
    margin: 5px;
    border-radius: 5px;
    font-size: 20px;
    font-family: Bahnschrift SemiBold;
    color: ${(props) => props.theme.colors.text};
  }

  li:hover {
    background-color: ${(props) => props.theme.colors.primaryButtonColor};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      background 0s, border 0s;
    box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
    -webkit-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
    -moz-box-shadow: 0px 0px 10px 3px
      ${(props) => props.theme.colors.primaryButtonColor};
    color: ${(props) => props.theme.colors.textLight};
  }

  li.active {
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      background 0s, border 0s;
    background-color: ${(props) => props.theme.colors.primaryButtonColor};
    color: ${(props) => props.theme.colors.textLight};
  }
`;

export const StyledTabBody = styled.div`
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0s,
    border 0s;
  width: 100%;
  height: auto;
  min-height: 400px;
  color: ${(props) => props.theme.colors.text};
`;
