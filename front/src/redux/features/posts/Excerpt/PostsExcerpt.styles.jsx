import styled from "styled-components";

export const StyledPostArticle = styled.article`
  margin: 0.5em 0.5em 0.5em 0;
  border: ${(props) => props.theme.colors.tables?.posts};
  border-radius: 10px;
  padding: 1em;

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    font-size: 1.2rem;
    margin: 0.5em 0;
  }
`;

export const StyledPostSection = styled.section`
  margin-top: 1em;

  h2 {
    font-size: 2.1rem;
  }
`;
