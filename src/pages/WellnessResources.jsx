import React from "react";
import "./WellnessResources.css";

function WellnessResources() {
  return (
    <div className="wellness-resources-container">
      <header className="wellness-resources-header">
        <h2>Wellness Resources</h2>
        <p>Access articles, tips, and tools for a balanced lifestyle.</p>
        <div className="image-placeholder">Image for Wellness Resources</div> {/* Image Placeholder */}
      </header>

      <ul className="resource-list">
        <li className="resource-item">
          <h3>Article 1: Healthy Eating Tips</h3>
          <p>Summary of healthy eating tips.</p>
          <div className="image-placeholder">Healthy Eating Image</div> {/* Image Placeholder */}
        </li>
        <li className="resource-item">
          <h3>Tool 1: Stress Management Guide</h3>
          <p>Description of stress management guide.</p>
          <div className="image-placeholder">Stress Management Image</div> {/* Image Placeholder */}
        </li>
        {/* Add more resource items as needed */}
      </ul>
    </div>
  );
}

export default WellnessResources;
