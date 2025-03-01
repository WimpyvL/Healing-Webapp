import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Healing with Kytin
        </Link>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className="material-icons">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </div>

          <div className="nav-item dropdown">
            <span className="nav-link">Services</span>
            <div className="dropdown-content">
              <Link to="/end-of-life-doula" className="dropdown-item">End of Life Doula</Link>
              <Link to="/qhht" className="dropdown-item">QHHT</Link>
              <Link to="/wellness-counseling" className="dropdown-item">Wellness Counseling</Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <span className="nav-link">Meditation</span>
            <div className="dropdown-content">
              <Link to="/meditation" className="dropdown-item">Meditation</Link>
              <Link to="/guided-meditations" className="dropdown-item">Guided Meditations</Link>
              <Link to="/mindfulness-techniques" className="dropdown-item">Mindfulness Techniques</Link>
            </div>
          </div>

          <div className="nav-item dropdown">
            <span className="nav-link">Resources</span>
            <div className="dropdown-content">
              <Link to="/wellness-resources" className="dropdown-item">Wellness Resources</Link>
              <Link to="/categories" className="dropdown-item">Categories</Link>
            </div>
          </div>

          {user && (
            <div className="nav-item dropdown">
              <span className="nav-link">Account</span>
              <div className="dropdown-content">
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <Link to="/favorites" className="dropdown-item">Favorites</Link>
                {user.isAdmin && (
                  <Link to="/admin" className="dropdown-item admin-link">Admin Dashboard</Link>
                )}
              </div>
            </div>
          )}

          <div className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="nav-item">
            {user ? (
              <button onClick={() => logout()} className="nav-link logout-btn">
                Logout
              </button>
            ) : (
              <div className="auth-links">
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
