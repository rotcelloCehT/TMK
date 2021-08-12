import './App.css';
// NAVIGATION HAMBURGER -- imported as one from index.js in /nav
import { Burger, Menu } from './components/nav';
// HEADER IMPORT
import Header from './components/header/Header';
// GALLERY IMPORT
import Gallery from './components/gallery/Gallery';
// ABOUT IMPORT
import About from './components/about/About';
// TRIPLECARD IMPORT
import TripleCard from './components/triplecard/Triplecard';
// CUSTOM IMPORT
import Custom from './components/custom/Custom';
// BESPOKE IMPORT
import Bespoke from './components/bespoke/Bespoke';
// TESTIMONY IMPORT
import Testimony from './components/testimony/Testimony';
// FOOTER IMPORT
import Footer from './components/footer/Footer';
// CONTACT IMPORT
import Contact from './components/contact/ContactForm';
// STYLES AND GLOBAL THEME
import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
// NAVIGATION HOOKS
import { useOnClickOutside } from './hooks';
import React, { useState, useRef } from 'react';
// ROUTER
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  const [open, setOpen] = useState(false);

  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
  
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
            <Switch>
              <Route path='/' exact>
                <Header />
                <Gallery />
                <About />
                <TripleCard />
                <Custom />
                <Bespoke />
                <Testimony />
                <Contact />
                <Footer />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
            </Switch>
          </>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
