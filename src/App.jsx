import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Home from "./pages/Home";
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
import "./App.css";

function App() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <header className="header">
            <h1>Healing with Kytin</h1>

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleOffcanvas}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            {/* Regular Navigation (Hidden on smaller screens) */}
            <nav>
              <ul className="nav-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/end-of-life-doula">End of Life Doula</Link>
                </li>
                <li>
                  <Link to="/qhht">QHHT</Link>
                </li>
                <li>
                  <Link to="/meditation">Meditation</Link>
                </li>
                <li>
                  <Link to="/guided-meditations">Guided Meditations</Link>
                </li>
                <li>
                  <Link to="/mindfulness-techniques">Mindfulness Techniques</Link>
                </li>
                <li>
                  <Link to="/wellness-resources">Wellness Resources</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <AuthLinks />
              </ul>
            </nav>
          </header>

          {/* Offcanvas Menu (Slides in from the right) */}
          <div className={`offcanvas-menu ${isOffcanvasOpen ? "open" : ""}`}>
            <nav>
              <ul className="nav-links">
                <li>
                  <Link to="/" onClick={toggleOffcanvas}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/end-of-life-doula" onClick={toggleOffcanvas}>
                    End of Life Doula
                  </Link>
                </li>
                <li>
                  <Link to="/qhht" onClick={toggleOffcanvas}>
                    QHHT
                  </Link>
                </li>
                <li>
                  <Link to="/meditation" onClick={toggleOffcanvas}>
                    Meditation
                  </Link>
                </li>
                 <li>
                  <Link to="/guided-meditations" onClick={toggleOffcanvas}>
                    Guided Meditations
                  </Link>
                </li>
                <li>
                  <Link to="/mindfulness-techniques" onClick={toggleOffcanvas}>
                    Mindfulness Techniques
                  </Link>
                </li>
                <li>
                  <Link to="/wellness-resources" onClick={toggleOffcanvas}>
                    Wellness Resources
                  </Link>
                </li>
                <li>
                  <Link to="/categories" onClick={toggleOffcanvas}>
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/favorites" onClick={toggleOffcanvas}>
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link to="/profile" onClick={toggleOffcanvas}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/admin" onClick={toggleOffcanvas}>
                    Admin
                  </Link>
                </li>
                 <li>
                  <Link to="/contact" onClick={toggleOffcanvas}>
                    Contact
                  </Link>
                </li>
                <AuthLinks onClick={toggleOffcanvas} />
              </ul>
            </nav>
          </div>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/end-of-life-doula" element={<EndOfLifeDoula />} />
              <Route path="/qhht" element={<QHHT />} />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/guided-meditations" element={<GuidedMeditations />} />
              <Route
                path="/mindfulness-techniques"
                element={<MindfulnessTechniques />}
              />
              <Route path="/wellness-resources" element={<WellnessResources />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/contact" element={<Contact />} />
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
    if (onClick) onClick(); // Close offcanvas menu after logout
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
