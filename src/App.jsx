// src/App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Components/AboutComp/About";
import Contact from "./Components/ContactComp/Contact";
import Header from "./Components/HeaderComp/Header";
import Home from "./Components/HomeComp/Home";
import Projects from "./Components/ProjectsComp/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
