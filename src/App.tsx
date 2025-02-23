import Apply from "./components/Apply";
import Footer from "./components/Footer";
import Graph from "./components/Graph";
import Hero from "./components/Hero";
import Investment from "./components/Investment";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Investment />
      <Graph />
      <Apply />
      <Footer />
    </>
  );
}
