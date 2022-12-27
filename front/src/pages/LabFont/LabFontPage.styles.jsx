import styled, { keyframes } from "styled-components";

export const ConteinerFont = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 3vh 5px 0 5px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  @import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");
  h2 {
    font-size: 10vw;
    /* transform: translate(-50%, -50%); */
    :nth-child(1) {
      color: "#C5AAAA";
      -webkit-text-stroke: 2px "#AE4B4B";
    }
    :nth-child(2) {
      color: "#A82C2C";
      
    }
  }
`;


export const WrapperLab = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vh 5px 0 5px;
`;



/* animation: ${waves} 4s ease-in-out infinite; */

const waves = keyframes`  
  0%,100%{
    clip-path:polygon(0% 45%,16% 44%, 33% 50%, 54% 60%, 70% 61%,84% 59%, 100% 52%, 100% 100%, 0% 100%)
  } 
50%{
  clip-path:polygon(0% 60%,15% 65%, 34% 66%, 51% 62%, 67% 50%,84% 45%, 100% 46%, 100% 100%, 0% 100%)
}
`;