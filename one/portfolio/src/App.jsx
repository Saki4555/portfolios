import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contacts from "./components/contacts.jsx/Contacts";
import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar/Navbar";

import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <Banner></Banner>

<About></About>
<Skills></Skills>
<Works></Works>
<Contacts></Contacts>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
