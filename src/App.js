// App.js
import React from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/hero/Hero';
import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';



const theme = createTheme({
  palette: {
    mode: 'dark', // or 'dark'
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
        <Hero />
        <div id='about' className='components-div'>
        <About />
        </div>
        <div id='skills' className='components-div'>
          <Skills/>
        </div>
        <div id='projects' className='components-div'>
          <Projects/>
        </div>
        <div id='education' className='components-div'>
          <Education />
        </div>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
