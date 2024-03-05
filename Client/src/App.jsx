import "./App.css";

import Dashbord from "./Dashbord/Dashbord";
import Leayout from "./Leayaut/Leayout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Leayout />

      <Router>
        <Routes>
          <Route path="/dash" element={<Dashbord />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
