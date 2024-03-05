import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Book from "../Pages/Book/Book";
import Services from "../Components/Services/Services";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Leayout() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/ser" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Leayout;
