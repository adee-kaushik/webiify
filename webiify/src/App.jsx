import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Templates from './Components/Templates';
import HowItWorks from './Components/HowItWorks';
import Footer from './Components/Footer';
import About from './Components/About';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Templates />
      <About />
      <HowItWorks />
      <Footer/>
    </div>
  );
}

export default App;