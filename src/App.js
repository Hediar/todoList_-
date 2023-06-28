import MainPage from "./Pages/MainPage.js";
import "./App.css";
import Header from "./components/Header.js";
import Router from "./shared/Router.js";
import { styled, ThemeProvider, useTheme } from "styled-components";
import MyButton from "./components/MyButton.js";
import { useState } from "react";
import { lightTheme, DarkTheme } from "./styles/theme.js";
import GlobalStyle from "./styles/GlobalStyle.js";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const modeChange = () => {
    setTheme(theme === lightTheme ? DarkTheme : lightTheme);
  };

  const fontSizeSmall = () => {};
  const fontSizeMiddle = () => {};
  const fontSizeBig = () => {};

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <MyButton func={modeChange} title="모드변경" />
        <MyButton func={fontSizeSmall} title="작게" />
        <MyButton func={fontSizeMiddle} title="보통" />
        <MyButton func={fontSizeBig} title="크게" />
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;
