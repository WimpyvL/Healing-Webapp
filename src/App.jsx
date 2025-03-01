import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import WellnessCounseling from "./pages/WellnessCounseling";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import EndOfLifeDoula from "./pages/EndOfLifeDoula";
import QHHT from "./pages/QHHT";
import Meditation from "./pages/Meditation";
import AdminDashboard from "./pages/AdminDashboard";
import GuidedMeditations from "./pages/GuidedMeditations";
import MindfulnessTechniques from "./pages/MindfulnessTechniques";
import WellnessResources from "./pages/WellnessResources";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import { AuthProvider, useAuth } from "./components/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/end-of-life-doula" element={<EndOfLifeDoula />} />
              <Route path="/qhht" element={<QHHT />} />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/guided-meditations" element={<GuidedMeditations />} />
              <Route path="/mindfulness-techniques" element={<MindfulnessTechniques />} />
              <Route path="/wellness-resources" element={<WellnessResources />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wellness-counseling" element={<WellnessCounseling />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          <footer className="footer">
            <p>© 2023 Healing with Kytin. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

function AuthLinks({ onClick }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    if (onClick) onClick();
  };

  if (user) {
    return (
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    );
  } else {
    return (
      <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </>
    );
  }
}

export default App;
