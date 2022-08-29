import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  position: relative;
  width: 90px;
  overflow: hidden;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 200%;
  height: 45px;
  border-radius: 45px;
  background: #bebebe;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    color: ${(props) => props.theme.colors.textLight};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      background 0s, border 0s;
    box-shadow: 0px 0px 10px 3px
      ${(props) =>
        props.borderButton
          ? props.borderButton
          : props.theme.colors.checkBoxSecundary};
    -webkit-box-shadow: 0px 0px 10px 3px
      ${(props) =>
        props.borderButton
          ? props.borderButton
          : props.theme.colors.checkBoxSecundary};
    -moz-box-shadow: 0px 0px 10px 3px
      ${(props) =>
        props.borderButton
          ? props.borderButton
          : props.theme.colors.checkBoxSecundary};
  }
  span {
    display: flex;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background: #ffffff;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 90px;
  height: 45px;

  + ${CheckBoxLabel} {
    transform: translateX(-50%);
    &::after {
      content: ${(props) => `'${props.rightContent}'`};
      text-align: right;
      
      border-radius: 50%;
      width: calc(100% - 50px);
      flex: 1 1 0;
      transition: all 0.3s ease-in 0s;
    }
    &::before {
      content: ${(props) => `'${props.leftContent}'`};
      text-align: left;
      width: calc(100% - 50px);
      flex: 1 1 0;
      border-radius: 50%;
      transition: all 0.3s ease-in 0s;
    }
  }

  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.theme.colors.primaryButtonColor};
    transform: translateX(0%);

    &:hover {
      color: ${(props) => props.theme.colors.textLight};
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
        background 0s, border 0s;
      box-shadow: 0px 0px 10px 3px
        ${(props) =>
          props.borderButton
            ? props.borderButton
            : props.theme.colors.primaryButtonColor};
      -webkit-box-shadow: 0px 0px 10px 3px
        ${(props) =>
          props.borderButton
            ? props.borderButton
            : props.theme.colors.primaryButtonColor};
      -moz-box-shadow: 0px 0px 10px 3px
        ${(props) =>
          props.borderButton
            ? props.borderButton
            : props.theme.colors.primaryButtonColor};
    }
  }
`;
