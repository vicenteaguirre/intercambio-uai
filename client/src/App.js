import React from "react";
import './App.css';
//components

import {BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";

import Navbar from "./components/Navbar";
import Formpage from "./pages/Formpage";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";








const App = () =>{
  return(
    <Router>

    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route path="/form" element={<Formpage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </Router>
  )
}


export default App;