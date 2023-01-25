// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import InsuranceIndex from "./components/InsuranceIndex";
import Partners from "./components/Partners";
import Login from "./components/Login";
import Register from "./components/Register";

import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";

window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insurance" element={<InsuranceIndex />} />
          {/* <Route path="/admin" element={<CraftyBeersIndex />} />
          <Route path="/crafty-beers/create" element={<CreateCraftyBeer />} /> */}
          <Route path="/partner/:id" element={<Partners />} />
          {/* <Route path="/crafty-beers/:id/review" element={<ReviewBeer />} /> */}
          <Route path="/login/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}
export default App;

// path('admin/', admin.site.urls),
// path('api/partners/', include('partners.urls')),
// path('api/policies/', include('policies.urls')),
// path('api/auth/', include('jwt_auth.urls')),
// path('api/purchased-policies/', include('purchased_policies.urls')),
// ]
