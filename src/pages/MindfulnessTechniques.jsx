import React from "react";
import "./MindfulnessTechniques.css";

function MindfulnessTechniques() {
  return (
    <div className="mindfulness-techniques-container">
      <header className="mindfulness-techniques-header">
        <h2>Mindfulness Techniques</h2>
        <p>Learn practical techniques to enhance your daily mindfulness.</p>
        <div className="image-placeholder">Image for Mindfulness Techniques</div> {/* Image Placeholder */}
      </header>

      <ul className="technique-list">
        <li className="technique-item">
          <h3>Technique 1: Breathing Exercises</h3>
          <p>Description of breathing exercises.</p>
          <div className="image-placeholder">Breathing Exercises Image</div> {/* Image Placeholder */}
        </li>
        <li className="technique-item">
          <h3>Technique 2: Body Scan Meditation</h3>
          <p>Description of body scan meditation.</p>
          <div className="image-placeholder">Body Scan Image</div> {/* Image Placeholder */}
        </li>
        {/* Add more technique items as needed */}
      </ul>
    </div>
  );
}

export default MindfulnessTechniques;
