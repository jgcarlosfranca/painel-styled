import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    

}

body{
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
}
::-webkit-scrollbar {
    width: 10px;
}

 ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.sidebarBackgroud}
    ;
}

 ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.colors.sideBarThumb}
    ;
    border-radius: 100px;
}
`;
