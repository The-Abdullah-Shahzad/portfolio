import React from 'react';
import Header from './componenrts/header/Header';
import Nav from './componenrts/nav/Nav';
import About from './componenrts/about/About';
import Experience from './componenrts/experience/Experience';
import Toolkit from './componenrts/experience/Toolkit';
import Portfolio from './componenrts/portfolio/Portfolio';
import Footer from './componenrts/footer/Footer';
import Contact from './componenrts/contact/Contact';

export default function App() {
  return (
    <>
      <div id="top" />
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Header />
        <Portfolio />
        <Experience />
        <About />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
