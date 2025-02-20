import React, { useState, useEffect } from "react";
import "./Meditation.css";

function Meditation() {
  const [progress, setProgress] = useState(0); // Progress from 0 to 100
  const [meditationHistory, setMeditationHistory] = useState([]); // Track meditation history
  const [streak, setStreak] = useState(0); // Track meditation streak
  const [lastMeditationDate, setLastMeditationDate] = useState(null); // Track last meditation date

  // Dummy data for meditation tiers
  const meditationTiers = [
    {
      tier: "Beginner",
      meditations: [
        {
          id: 1,
          title: "Introduction to Mindfulness",
          description: "A basic meditation for beginners.",
          length: 5, // Length in minutes
          theme: "Mindfulness", // Theme of meditation
        },
        {
          id: 2,
          title: "Breathing Exercises for Calm",
          description: "Simple breathing techniques to reduce stress.",
          length: 10,
          theme: "Stress Relief",
        },
      ],
    },
    {
      tier: "Intermediate",
      meditations: [
        {
          id: 3,
          title: "Deepening Your Focus",
          description: "Techniques to improve concentration.",
          length: 15,
          theme: "Focus",
        },
        {
          id: 4,
          title: "Emotional Awareness",
          description: "Exploring and understanding your emotions.",
          length: 20,
          theme: "Emotional Awareness",
        },
      ],
    },
    {
      tier: "Expert",
      meditations: [
        {
          id: 5,
          title: "Advanced Visualization",
          description: "Using visualization for personal growth.",
          length: 25,
          theme: "Visualization",
        },
        {
          id: 6,
          title: "Transcendental Meditation",
          description: "Reaching deeper states of consciousness.",
          length: 30,
          theme: "Transcendental",
        },
      ],
    },
  ];

  // Function to simulate meditation completion and update progress
  const completeMeditation = (meditation) => {
    // Increase progress (you can adjust the increment as needed)
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 10;
      return Math.min(newProgress, 100); // Cap at 100
    });

    // Update meditation history
    const currentDate = new Date().toLocaleDateString();
    setMeditationHistory((prevHistory) => [
      ...prevHistory,
      {
        date: currentDate,
        title: meditation.title,
        length: meditation.length,
        theme: meditation.theme,
      },
    ]);

    // Update streak
    if (lastMeditationDate === currentDate) {
      // Already meditated today, do nothing
    } else if (lastMeditationDate === getYesterdayDate()) {
      // Meditated yesterday, increase streak
      setStreak((prevStreak) => prevStreak + 1);
    } else {
      // Didn't meditate yesterday, reset streak
      setStreak(1);
    }

    setLastMeditationDate(currentDate);
  };

  // Helper function to get yesterday's date
  const getYesterdayDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday.toLocaleDateString();
  };

  useEffect(() => {
    // Load progress from local storage on initial load
    const storedProgress = localStorage.getItem("meditationProgress");
    if (storedProgress) {
      setProgress(parseInt(storedProgress, 10));
    }

    // Load meditation history from local storage
    const storedHistory = localStorage.getItem("meditationHistory");
    if (storedHistory) {
      setMeditationHistory(JSON.parse(storedHistory));
    }

    // Load streak from local storage
    const storedStreak = localStorage.getItem("meditationStreak");
    if (storedStreak) {
      setStreak(parseInt(storedStreak, 10));
    }

    // Load last meditation date from local storage
    const storedLastMeditationDate = localStorage.getItem("lastMeditationDate");
    if (storedLastMeditationDate) {
      setLastMeditationDate(storedLastMeditationDate);
    }
  }, []);

  useEffect(() => {
    // Save progress to local storage whenever it changes
    localStorage.setItem("meditationProgress", progress.toString());
    localStorage.setItem("meditationHistory", JSON.stringify(meditationHistory));
    localStorage.setItem("meditationStreak", streak.toString());
    localStorage.setItem("lastMeditationDate", lastMeditationDate);
  }, [progress, meditationHistory, streak, lastMeditationDate]);

  return (
    <div className="meditation-container">
      <header className="meditation-header">
        <h2>Meditation Journey</h2>
      </header>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="progress-label">Your Progress: {progress}%</p>

      {/* Meditation Tiers */}
      {meditationTiers.map((tier) => (
        <section key={tier.tier} className="tier-section">
          <h3>{tier.tier}</h3>
          <ul className="meditation-list">
            {tier.meditations.map((meditation) => (
              <li key={meditation.id} className="meditation-item">
                <h4>{meditation.title}</h4>
                <p>{meditation.description}</p>
                <p>Length: {meditation.length} minutes</p>
                <p>Theme: {meditation.theme}</p>
                <button onClick={() => completeMeditation(meditation)}>
                  Complete
                </button>
                {/* Journaling Prompt */}
                <p>Reflect on your experience: What did you notice during this meditation?</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Meditation History */}
      <section className="meditation-history">
        <h3>Meditation History</h3>
        <ul>
          {meditationHistory.map((item, index) => (
            <li key={index}>
              {item.date} - {item.title} ({item.length} minutes, {item.theme})
            </li>
          ))}
        </ul>
      </section>

      {/* Meditation Streak */}
      <section className="meditation-streak">
        <h3>Meditation Streak</h3>
        <p>You have a meditation streak of {streak} days!</p>
      </section>
    </div>
  );
}

export default Meditation;
