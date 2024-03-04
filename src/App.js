import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Services";

function App() {
  return (
    <div className="App">
     <Navbar />
      <Hero />
      <h1 className="text-center text-6xl py-5">My Services</h1>
      <Services />
      {/* Testimonial */}
      {/* Footer */}
    </div>
  );
}

export default App;
