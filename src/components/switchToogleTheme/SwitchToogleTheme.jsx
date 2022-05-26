import React from "react";
import "./styles.css";


const ToggleSwitch = (props) => {
  return (
    <div className="container_switch_toogle">
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
    </div>
  );
};

export default ToggleSwitch;
