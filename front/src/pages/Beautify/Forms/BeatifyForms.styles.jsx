import styled from "styled-components";

export const LongLightButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledBeautifyConteiner = styled.div`
  padding: 4vh 5px 0 5px;
  .pager {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pager button {
    z-index: 99;
    flex: 0 0 42px;
    height: 24px;
    padding: 6px;
    transition: 0.4s;
    border-radius: 24px;
    background-color: #383142;
  }
  .pager button span {
    height: 30px;
    width: 100%;
    border-radius: 42px;
    background-color: #383142;
    transition: 0.4s;
  }

  .pager button:focus {
    flex: 0 0 80px;
    background-color: #8f44fd;
  }

  .pager-glummy {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pager-glummy button {
    z-index: 99;
    flex: 0 0 42px;
    height: 24px;
    padding: 6px;
    transition: 0.4s;
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.primaryButtonColor};
    &:hover {
      color: ${(props) => props.theme.colors.text};
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
        background 0s, border 0s;
      box-shadow: 0px 0px 10px 3px
        ${(props) => props.theme.colors.primaryButtonColor} inset;
      -webkit-box-shadow: 0px 0px 10px 3px
        ${(props) => props.theme.colors.primaryButtonColor} inset;
      -moz-box-shadow: 0px 0px 10px 3px
        ${(props) => props.theme.colors.primaryButtonColor} inset;
    }

    &:active {
      transition: transform ease-in 0.1s;
      transform: scale(0.9);
      box-shadow: 0 2px 25px ${(props) => props.theme.colors.primaryButtonColor}
        inset;
    }
  }
  
  .pager-glummy button span {
    height: 30px;
    width: 100%;
    border-radius: 42px;
    background-color: ${(props) => props.theme.colors.primaryButtonColor};
    transition: 0.4s;
    &:hover {
      color: ${(props) => props.theme.colors.text};
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
        background 0s, border 0s;
      box-shadow: 0px 0px 10px 3px
        ${(props) => props.theme.colors.primaryButtonColor} inset;
      -webkit-box-shadow: 0px 0px 10px 3px
        ${(props) => props.theme.colors.primaryButtonColor} inset;
      -moz-box-shadow: 0px 0px 10px 3px
        ${(props) => props.theme.colors.primaryButtonColor} inset;
    }

    &:active {
      transition: transform ease-in 0.1s;
      transform: scale(0.9);
      box-shadow: 0 2px 25px ${(props) => props.theme.colors.primaryButtonColor}
        inset;
    }
  }

  .pager-glummy button:focus {
    flex: 0 0 80px;
    background-color: ${(props) => props.theme.colors.primaryButtonColor};
  }
`;
