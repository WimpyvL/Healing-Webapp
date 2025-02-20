import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Healing with Kytin</h1>
        <p>"Empowering Your Journey to Wellness"</p>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Healing with Kytin</h2>
        <p>
          Healing with Kytin is dedicated to providing individualised, holistic
          healing services that nurture the mind, body, and spirit. My mission
          is to help empower individuals on their journey towards wellness and
          personal growth by playing a compassionate, guiding role.
        </p>
        <div className="image-placeholder">Image of Kytin</div>
        <p>
          I offer a serene and supportive environment where you can explore
          various healing modalities, connect with like-minded individuals, and
          embark on a transformative journey towards a healthier, happier you.
        </p>
        <p>
          I embarked on my journey to facilitating wellness by graduating from
          The South African College of Applied Psychology (SACAP) with a
          Bachelor of Applied Social Science Degree (BAppSocSci majoring in
          Counselling and Psychology). Once COVID hit, that steered me in the
          direction to go within on my healing journey, leading me to complete
          my level 1 and 2 training in Quantum Healing Hypnosis Technique
          (QHHT®).
        </p>
        <p>
          In 2024, I completed my End of Life Companion Doula training. Shortly
          afterwards, I trained as a Wellness Counsellor, and registered with
          ASCHP (WC24/12098).
        </p>
        <p>
          I provide in-person sessions, home visits, hospital visits, as well as
          online support.
        </p>
      </section>

      {/* Core Offerings Section */}
      <section className="core-offerings">
        <h2>Core Offerings</h2>
        <div className="service-card">
          <h3>
            <Link to="/meditation">Meditation</Link>
          </h3>
          <div className="image-placeholder">Meditation Image</div>
          <p>
            Guided Meditation Sessions to help cultivate inner peace, alleviate
            stress and anxiety to optimize health and wellbeing.
          </p>
        </div>
        <div className="service-card">
          <h3>
            <Link to="/qhht">QHHT®</Link>
          </h3>
          <div className="image-placeholder">QHHT Image</div>
          <p>
            QHHT® (Quantum Healing Hypnosis Technique) is a transformative
            hypnosis modality designed to facilitate deep healing through
            accessing the subconscious mind.
          </p>
        </div>
        <div className="service-card">
          <h3>
            <Link to="/end-of-life-doula">End of Life Doula</Link>
          </h3>
          <div className="image-placeholder">End of Life Doula Image</div>
          <p>
            An End of Life Companion Doula (EOLCD) provides compassionate
            support to individuals and their loved ones during the final stages
            of life.
          </p>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="additional-resources">
        <h2>Explore More</h2>
        <div className="resource-card">
          <h3>
            <Link to="/guided-meditations">Guided Meditations</Link>
          </h3>
          <p>Explore our collection of guided meditations.</p>
        </div>
        <div className="resource-card">
          <h3>
            <Link to="/mindfulness-techniques">Mindfulness Techniques</Link>
          </h3>
          <p>Learn practical techniques to enhance your daily mindfulness.</p>
        </div>
        <div className="resource-card">
          <h3>
            <Link to="/wellness-resources">Wellness Resources</Link>
          </h3>
          <p>Access articles, tips, and tools for a balanced lifestyle.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Community Says</h2>
        <div className="testimonial">
          <p>
            "Healing with Kytin has transformed my life. I feel more centered
            and at peace." - Emily R.
          </p>
        </div>
        <div className="testimonial">
          <p>
            "The guided meditations are a perfect way to start my day. Thank
            you!" - David L.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
