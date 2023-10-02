// src/App.js
import React from 'react';
import Home from './components/home';
import Projects from './components/Projects';
import Experience from './components/experience';
import Education from './components/education';
import Achievements from './components/achievements';
import Contact from './components/contact';
import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Education/>
        <Experience/>
        <Achievements/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
