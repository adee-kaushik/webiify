import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Templates from './Components/Templates';
import About from './Components/About';
import HowItWorks from './Components/HowItWorks';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="dark:bg-gray-900 transition-colors">
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