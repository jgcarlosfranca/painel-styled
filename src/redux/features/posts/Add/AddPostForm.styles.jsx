import styled from "styled-components";

export const AddPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddPostSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const AddPostForms = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AddPostLabel = styled.label`
  margin-top: 1em;
  margin-bottom: 1.1em;
`;
export const AddPostinput = styled.input`
  font: inherit;
  margin-bottom: 1em;
  border-color: #404656;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.contrastBackgroud};
  &:active {
    border-color: ${(props) => props.theme.colors.primaryButtonColor};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.primaryButtonColor};
  }
`;

export const AddPostContentTextArea = styled.textarea`
  font: inherit;
  margin-bottom: 1em;
  border-color: #404656;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.contrastBackgroud};
  &:active {
    border-color: ${(props) => props.theme.colors.primaryButtonColor};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.primaryButtonColor};
  }
`;

export const buttonFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
