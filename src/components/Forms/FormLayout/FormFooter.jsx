import styled from "styled-components";
import { StyledFormGroup } from "../TextInput/TextInput.styles";

export const FormFooter = ({ children }) => {
  return (
    <StyledFooter className="form__input-group form__input-group--row form__input-group--spaced form__input-group--footer">
      {children}
    </StyledFooter>
  );
};

const StyledFooter = styled(StyledFormGroup)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.75em;
  margin-left: 40px;
  width: 60%;
`;
