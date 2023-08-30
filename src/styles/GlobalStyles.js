import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
transition: background-color,transform .3s ease-in-out;
font-family: Verdana, Geneva, Tahoma, sans-serif;

}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid #1D5D9B;
  outline-offset: -1px;
}
`;

export default GlobalStyles;
