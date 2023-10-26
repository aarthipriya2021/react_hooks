import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/usingHook/Home";
import Profile from "./components/usingHook/Profile";
import Contact from "./components/usingHook/Contact";
import Navbar from "./components/usingHook/Navbar";


// for using useContext, importing create context is first step.
// you can create variable for createContext in store like component. 
export const AppContext = createContext();


function HookApp() {

  // first step initial state of username 
  const [userName, setUserName] = useState("Aarthi");
  return (

    // variable named "AppContext" is now provider of states for whole application
    <AppContext.Provider value={{ userName, setUserName}}>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* eliminate all props elements */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </Router>
    </div>
    </AppContext.Provider>
  );
}

export default HookApp;
