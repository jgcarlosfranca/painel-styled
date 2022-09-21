import styled from "styled-components";

export const StyledBackGroundFixedCard = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors.sidebarBackgroud};
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
  padding: 1.2rem 1rem;
  color: ${(props) => props.theme.colors.text};
  border-radius: 1rem;

  min-width: 720px;
`;
