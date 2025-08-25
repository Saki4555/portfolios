import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

import './App.css'
import { Education } from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     
      
      <div className="text-neutral-300 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      
      <Navbar />
        <Hero />
        <About />
        <Technologies />
        {/* <Experience /> */}
        <Project />
        <Education />
        <Contact />
      <Footer></Footer>
        </div>
     
      
     
    </>
  );
}

export default App;


{/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}














