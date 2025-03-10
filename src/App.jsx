import React from 'react';
import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import CurrentShow from './components/CurrentShow';
import About from "./components/About"
import Shows from"./components/Shows"
import Contact from './components/Contact';
import Footer from './components/Footer';

//Hlavná stránka
const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <main>
        <CurrentShow />
        <About />
        <Shows />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
