import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="m-0 p-0">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
