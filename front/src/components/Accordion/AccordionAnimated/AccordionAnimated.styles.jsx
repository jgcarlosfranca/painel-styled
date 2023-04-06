import styled, { keyframes } from "styled-components";

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #4d4d4d;
  }
`;

const Content = styled.div`
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  overflow: hidden;
  transition: height 0.2s ease-in-out;
`;

const expand = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Text = styled.div`
  font-size: 1rem;
  margin-top: 10px;
  animation: ${({ isOpen }) => isOpen && expand} 0.3s ease-in-out;
`;