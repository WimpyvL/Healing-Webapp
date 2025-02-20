import React, { useState, useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";
import "./Categories.css";

function Categories() {
  const categoriesData = [
    {
      name: "Morning Meditations",
      meditations: [
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
      ],
    },
    {
      name: "Evening Relaxation",
      meditations: [
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
      ],
    },
    {
      name: "Stress Relief",
      meditations: [
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
      ],
    },
    {
      name: "Mindfulness & Focus",
      meditations: [
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
      ],
    },
  ];

  const [likedMeditations, setLikedMeditations] = useState(() => {
    const storedLikes = localStorage.getItem("likedMeditations") || "{}";
    return JSON.parse(storedLikes);
  });

  useEffect(() => {
    localStorage.setItem("likedMeditations", JSON.stringify(likedMeditations));
  }, [likedMeditations]);

  const toggleLike = (meditationId) => {
    setLikedMeditations((prevLiked) => ({
      ...prevLiked,
      [meditationId]: !prevLiked[meditationId],
    }));
  };

  return (
    <div className="categories-container">
      <h2 className="category-title">Meditation Categories</h2>
      <div className="category-grid">
        {categoriesData.map((category) => (
          <div key={category.name} className="category-card">
            <h3>{category.name}</h3>
            {category.meditations.map((meditation) => (
              <div key={meditation.id} className="meditation-card">
                <h4>{meditation.title}</h4>
                <p>{meditation.description}</p>
                <AudioPlayer
                  title={meditation.title}
                  audioSrc={meditation.audioSrc}
                  description={meditation.description}
                />
                <button
                  className={`like-button ${
                    likedMeditations[meditation.id] ? "liked" : ""
                  }`}
                  onClick={() => toggleLike(meditation.id)}
                >
                  {likedMeditations[meditation.id] ? "❤️" : "🤍"}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
