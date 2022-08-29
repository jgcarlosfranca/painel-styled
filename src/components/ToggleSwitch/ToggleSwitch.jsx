import React from "react";
import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
} from "./ToggleSwitch.styles";

export const ToggleSwitch = (props) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        name={props.name}
        checked={props.valor}
        leftContent={props.leftContent}
        rightContent={props.rightContent}
        onChange={props.handleChangeCheckBox}
      />
      <CheckBoxLabel htmlFor="checkbox">
        <span></span>
      </CheckBoxLabel>
    </CheckBoxWrapper>
  );
};
