import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Button } from "./styles";
const theme = {
  white: "#fff",
  red: "#f00",
  black: "#000",
  blue: "#0000fe",
  green: "#00fe00",
};
const GlobalStyle = createGlobalStyle`
  body{
    font-size: 16px ;
    font-weight: 400;
    color: #333;
  }
  .myCotainer{
    display: flex;
    max-width: 1024px;
  }


`;
const StyledComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="myCotainer">
        <h1>StyledComponent</h1>
        <Button> Hello work</Button>
        <Button variant="primary"> Primary</Button>
        <Button variant="success">Success</Button>
        <Button variant="success" disabled>
          Primary
        </Button>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default StyledComponent;
