import React from "react";
import { StyledFormBodyRow } from "./BodyRow.styles";

export const FormBodyRow = (props) => {
    return <StyledFormBodyRow >
        {props.children}
    </StyledFormBodyRow>;
};
