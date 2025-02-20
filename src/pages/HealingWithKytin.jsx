import React from "react";
import "./HealingWithKytin.css";

function HealingWithKytin() {
  return (
    <div className="healing-with-kytin">
      {/* Hero Section */}
      <section className="hero">
        <h2>Empowering Your Journey to Wellness</h2>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Healing with Kytin</h2>
        <p>
          At Healing with Kytin, we are dedicated to offering individualized,
          holistic healing services. Our mission is to empower individuals on
          their wellness journey through compassionate guidance.
        </p>
        <p>
          Kytin Moodley holds a Bachelor of Applied Social Science and is
          certified in QHHT® and End of Life Companion Doula training.
        </p>
      </section>

      {/* Services Overview */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Meditation</h3>
            <p>Guided sessions to calm your mind and uplift your spirit.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>QHHT®</h3>
            <p>Quantum Healing Hypnosis Technique for deep healing.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>End of Life Care</h3>
            <p>Compassionate support for life's final journey.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            "Kytin's guidance has been life-changing. Her compassion and
            expertise are unparalleled." - Sarah L.
          </p>
        </div>
        <div className="testimonial">
          <p>
            "The meditation sessions have brought me so much peace and clarity.
            Thank you, Kytin!" - Michaela K.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HealingWithKytin;
