import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Templates from './Components/Templates';
import Pricing from './Components/Pricing';
import About from './Components/About';
import HowItWorks from './Components/HowItWorks';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-brand-bg dark:bg-brand-bg-dark transition-colors font-body">
      <Navbar />
      <Hero />
      <Templates />
      <Pricing />
      <About />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;