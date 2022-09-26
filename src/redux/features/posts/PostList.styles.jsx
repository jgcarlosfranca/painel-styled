import styled from "styled-components";

export const StyledPostArticle = styled.article`
  margin: 0.5em 0.5em 0.5em 0;
  border: ${props => props.theme.colors.tables?.posts};
  border-radius: 10px;
  padding: 1em;
`;
