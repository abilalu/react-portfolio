import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import HeroImage from "./components/HeroImage";
import FooterLine from "./components/FooterLine"

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div>
        <HeroImage/>
        <NavBar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
        <FooterLine/>
      </div>
    </Router>
  );
}

export default App;
