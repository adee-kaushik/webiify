import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Templates from './Components/Templates';
import HowItWorks from './Components/HowItWorks';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Templates />
      <HowItWorks />
      <Footer/>
    </div>
  );
}

export default App;