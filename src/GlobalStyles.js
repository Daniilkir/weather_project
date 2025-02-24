import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat Alternates", serif;
}


  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
      font-family: "Montserrat Alternates", serif;
  }
`;
export const Page = styled.div`
overflow: hidden; 
display: flex; 
flex-direction: column; 
min-height:100vh;
`