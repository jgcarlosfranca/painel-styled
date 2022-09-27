import styled from "styled-components";

export const StyledSwicthToogleWrapper = styled.div`
  position: relative;
  width: 100px;
  overflow: hidden;
  .container_switch_toogle {
    display: flex;
    align-items: center;
    padding: 30px 20px 20px 20px;
  }

  .toggle-switch {
    position: relative;
    width: 90px;
    display: inline-block;
    text-align: left;
    margin: 5px;
  }

  .checkboxCustom {
    display: none;
  }

  .checkboxCustomInner {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
  }

  .innerBackground {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }

  .innerBackground:before,
  .innerBackground:after {
    float: left;
    width: 50%;
    padding: 0;
    line-height: 36px;
    color: #fff;
    font-weight: bold;
    box-sizing: border-box;
  }

  .innerBackground:before {
    content: "SIM";
    padding-left: 10px;
    background-color: rgb(2, 174, 2);
    color: #fff;
  }

  .innerBackground:after {
    content: "NÃO";
    padding-right: 10px;
    background-color: #bbb;
    color: #fff;
    text-align: right;
  }

  .switch {
    display: block;
    width: 20px;
    height: 20px;
    margin: 5px;
    background: #fff;
    position: absolute;
    top: 2px;
    bottom: 0;
    right: 60px;
    border: 0 solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }

  .checkboxCustom:checked + .checkboxCustomInner .innerBackground {
    margin-left: 0;
  }

  .checkboxCustom:checked + .checkboxCustomInner .switch {
    right: 0px;
  }
`;
