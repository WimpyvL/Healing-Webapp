import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useAuth } from "../components/AuthContext";

function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user ? user.username : "User");
  const [email, setEmail] = useState(user ? user.email : "email@email.com");
  const [meditationGoal, setMeditationGoal] = useState("15 minutes daily");
  const [totalMeditations, setTotalMeditations] = useState(0);
  const [totalMinutesMeditated, setTotalMinutesMeditated] = useState(0);
  const [favoriteCategory, setFavoriteCategory] = useState("None");
  const [meditationHistory, setMeditationHistory] = useState([]);

  useEffect(() => {
    // Load meditation history from local storage
    const storedHistory = localStorage.getItem("meditationHistory");
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      setMeditationHistory(parsedHistory);

      // Calculate total meditations and total minutes
      setTotalMeditations(parsedHistory.length);
      const totalMinutes = parsedHistory.reduce(
        (sum, item) => sum + item.length,
        0
      );
      setTotalMinutesMeditated(totalMinutes);

      // Determine favorite category
      const categoryCounts = {};
      parsedHistory.forEach((item) => {
        const category = item.theme;
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      });

      let maxCategory = "None";
      let maxCount = 0;
      for (const category in categoryCounts) {
        if (categoryCounts[category] > maxCount) {
          maxCategory = category;
          maxCount = categoryCounts[category];
        }
      }
      setFavoriteCategory(maxCategory);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    alert("Settings updated successfully!");
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h2>Your Profile</h2>
      </header>

      <section className="profile-details">
        <h3>Personal Information</h3>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </section>

      <section className="stats-section">
        <h3>Your Meditation Stats</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{totalMeditations}</div>
            <div className="stat-label">Total Meditations</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{totalMinutesMeditated}</div>
            <div className="stat-label">Total Minutes Meditated</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{favoriteCategory}</div>
            <div className="stat-label">Favorite Category</div>
          </div>
        </div>
      </section>

      <section className="settings-section">
        <h3>Account Settings</h3>
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="meditationGoal">Meditation Goal:</label>
            <select
              id="meditationGoal"
              value={meditationGoal}
              onChange={(e) => setMeditationGoal(e.target.value)}
            >
              <option>5 minutes daily</option>
              <option>10 minutes daily</option>
              <option>15 minutes daily</option>
              <option>20 minutes daily</option>
            </select>
          </div>

          <button type="submit">Update Settings</button>
        </form>
      </section>
    </div>
  );
}

export default Profile;
