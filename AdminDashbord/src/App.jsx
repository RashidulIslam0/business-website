import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidbar";
import Home from "./Pages/Home";
import AllBook from "./Pages/AllBook";
import Video from "./Pages/Video/Video";
import Edit from "./Pages/Video/Edit";
// import Editevideo from "./Pages/Video/Edit";
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
            <Route path="/allbook" element={<AllBook />} />
            <Route path="/video" element={<Video />} />
            <Route path="/edit" element={<Edit />} />

            {/* <Route path="/edit" element={<Editevideo />} /> */}
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
