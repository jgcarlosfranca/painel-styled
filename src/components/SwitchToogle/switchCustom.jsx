import React from "react";
import { StyledSwicthToogleWrapper } from "./SwitchToogle.styles.jsx";

const ToggleSwitchCustom = (props) => {
  return (
    <StyledSwicthToogleWrapper>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkboxCustom"
          name={props.name}
          id={props.label}
          checked={props.valor}
          onChange={props.handleChangeCheckBox}
        />
        <label className="checkboxCustomInner" htmlFor={props.label}>
          <span className="innerBackground" />
          <span className="switch" />
        </label>
      </div>
    </StyledSwicthToogleWrapper>
  );
};

export default ToggleSwitchCustom;
