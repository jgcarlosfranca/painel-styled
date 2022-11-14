import styled from "styled-components";

export const StyledModalConteiner = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 3vh 5px 1vh 5px;
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledPane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  margin: 4rem;
  width: 50%;
`;

export const StyledHeader = styled.h2`
    color: orange;
`;

export const StyledAppButton = styled.button`
  background-color: orange;
  color: white;
  border: solid 2px #9f7500;
  border-radius: 8px;
  width: 20rem;
  padding: 0.2rem;
  margin: 0.2rem;
  font-size: 1.6rem;
`;