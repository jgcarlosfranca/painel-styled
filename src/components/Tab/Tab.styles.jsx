import styled from "styled-components";

export const StyledTab = styled.div`
  width: 80%;
  height: auto;
  min-height: 400px;
  background: #053742;
  margin: 3.5rem auto 1.5rem;
  padding: 2rem 1rem;
  color: #e8f0f2;
  border-radius: 2rem;

  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`;

export const StyledTabUl = styled.ul`
  width: 60%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #39a2db;
  border-radius: 2rem;

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
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
  }

  li:nth-child(2) {
    border-radius: 0;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  li:hover {
    background: rgba(50, 224, 196, 0.15);
  }

  li.active {
    background: #39a2db;
  }
`;
