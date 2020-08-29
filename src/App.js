import React from 'react';
import {ThemeProvider} from "styled-components";
import Theme from './themes'
import GlobalStyle from "./themes/globalStyles";
import Header from "./components/header/header.component";

function App() {
    console.log("Theme: ", Theme);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
