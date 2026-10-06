import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Programs from "./sections/Programs";
import Structure from "./sections/Structure";
import Plans from "./sections/Plans";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Features />

      <Programs />

      <Structure />

      <Plans />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
}

export default App;