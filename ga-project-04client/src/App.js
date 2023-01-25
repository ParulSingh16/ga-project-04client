// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import InsuranceIndex from "./components/InsuranceIndex";
import Partners from "./components/Partners";
import Login from "./components/Login";
import Register from "./components/Register";

import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";
import { ProviderIndex } from "./components/ProviderIndex";

window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insurance" element={<InsuranceIndex />} />
          <Route path="/providers" element={<ProviderIndex />} />
          <Route path="/partner/:id" element={<Partners />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}
export default App;
