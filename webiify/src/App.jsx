import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Templates from './Components/Templates';
import About from './Components/About';
import HowItWorks from './Components/HowItWorks';
import Footer from './Components/Footer';

import { Suspense } from 'react';
function App() {
  return (
    <div className="bg-brand-bg dark:bg-brand-bg-dark transition-colors font-body">
   
      <Navbar />
       
      <Hero />
      
      <Templates />
      <About />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;