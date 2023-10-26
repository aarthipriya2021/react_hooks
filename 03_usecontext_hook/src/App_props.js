import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/usingProps/Home";
import Profile from "./components/usingProps/Profile";
import Contact from "./components/usingProps/Contact";
import Navbar from "./components/usingProps/Navbar";

function PropsApp() {

  // first step initial state of username 
  const [userName, setUserName] = useState("Aarthi");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* you can send state as props to where you send (components) */}
          <Route path="/" element={<Home userName={userName} />} />
          <Route path="/profile" element={<Profile userName={userName} setUserName={setUserName} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default PropsApp;
