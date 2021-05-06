import React from 'react';
import {GlobalStyle, lightTheme, darkTheme } from './globalStyles';
import Home from './pages/Home';
import {useDarkMode} from './components/colorMode'
import {Toggle} from './components/Toggle'
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Navbar from './components/navbar/';


function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
    <ThemeProvider theme={themeMode}>
    <GlobalStyle />
    <Navbar />
    <Toggle theme={theme} toggleTheme={toggleTheme}/>
    <Home />
    <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;
