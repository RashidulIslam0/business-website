import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidbar";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <section id="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
