import React from "react";
import "./GuidedMeditations.css";

function GuidedMeditations() {
  return (
    <div className="guided-meditations-container">
      <header className="guided-meditations-header">
        <h2>Guided Meditations</h2>
        <p>Explore our collection of guided meditations to enhance your well-being.</p>
        <div className="image-placeholder">Image for Guided Meditations</div> {/* Image Placeholder */}
      </header>

      <ul className="meditation-list">
        <li className="meditation-item">
          <h4>Meditation Title 1</h4>
          <p>Description of meditation 1.</p>
          <div className="image-placeholder">Meditation 1 Image</div> {/* Image Placeholder */}
        </li>
        <li className="meditation-item">
          <h4>Meditation Title 2</h4>
          <p>Description of meditation 2.</p>
          <div className="image-placeholder">Meditation 2 Image</div> {/* Image Placeholder */}
        </li>
        {/* Add more meditation items as needed */}
      </ul>
    </div>
  );
}

export default GuidedMeditations;
