import React, { useState, useEffect } from "react";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load liked meditations from local storage
    const storedLikes = localStorage.getItem("likedMeditations") || "{}";
    const likedMeditations = JSON.parse(storedLikes);

    // Fetch meditation data (replace with your actual data source)
    const fetchMeditations = async () => {
      // Simulate fetching meditation data
      const allMeditations = [
        {
          id: 101,
          title: "Gentle Morning Awakening",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          description:
            "Start your day with a gentle meditation to awaken your senses and set a positive tone.",
        },
        {
          id: 102,
          title: "Sunrise Gratitude",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
          description:
            "A meditation focused on gratitude for the new day and all its possibilities.",
        },
        {
          id: 201,
          title: "Soothing Nighttime Wind Down",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          description:
            "Relax and unwind before bed with this soothing meditation to calm your mind.",
        },
        {
          id: 202,
          title: "Deep Sleep Journey",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
          description:
            "A guided meditation to help you drift into a deep and restful sleep.",
        },
        {
          id: 301,
          title: "Quick Stress Relief",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
          description:
            "A short meditation to quickly relieve stress and anxiety during the day.",
        },
        {
          id: 302,
          title: "Mindful Breathing",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
          description:
            "Focus on your breath to center yourself and release tension.",
        },
        {
          id: 401,
          title: "Enhancing Focus and Concentration",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
          description:
            "Improve your focus and concentration with this mindfulness meditation.",
        },
        {
          id: 402,
          title: "Present Moment Awareness",
          audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
          description:
            "Practice being fully present in the moment to increase awareness and reduce distractions.",
        },
      ];

      // Filter meditations based on likedMeditations
      const favoriteMeditations = allMeditations.filter(
        (meditation) => likedMeditations[meditation.id]
      );
      setFavorites(favoriteMeditations);
    };

    fetchMeditations();
  }, []);

  return (
    <div className="favorites-container">
      <header className="favorites-header">
        <h2>Your Favorite Meditations</h2>
      </header>

      {favorites.length > 0 ? (
        <ul className="favorites-list">
          {favorites.map((item) => (
            <li key={item.id} className="favorite-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-favorites">
          You haven't added any meditations to your favorites yet.
        </p>
      )}
    </div>
  );
}

export default Favorites;
