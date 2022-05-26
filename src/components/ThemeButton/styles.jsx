import styled from "styled-components";

export const ThemeButtonStyled = styled.button`
cursor: pointer;
height: 30px;
width: 30px;   
border-radius: 50%;
border: none;
background-color: ${props => props.theme.colors.primary};
color: ${props => props.theme.colors.toggleThemeBackGrond};
&:focus {
    outline: none;
}
transition: all .5s ease;
`;
