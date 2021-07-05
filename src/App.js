import './App.css';
// NAVIGATION HAMBURGER -- imported as one from index.js in /nav
import { Burger, Menu } from './components/nav';
// HEADER IMPORT
import Header from './components/header/Header';
import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { useOnClickOutside } from './hooks';
import React, { useState, useRef } from 'react';


function App() {
  const [open, setOpen] = useState(false);

  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <Header />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
