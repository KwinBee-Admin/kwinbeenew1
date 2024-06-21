// src/component/coach/coach.js
import React from 'react';
import './coach.css';
import coachimage from './coachimage.jpg'; // Import the image

const coaches = [
  {
    name: "Coach 1",
    image: coachimage,
    team: "Team A",
    stats: "314 26.9k"
  },
  {
    name: "Coach 2",
    image: coachimage,
    team: "Team B",
    stats: "250 20.5k"
  },
  {
    name: "Coach 3",
    image: coachimage,
    team: "Team C",
    stats: "400 30.1k"
  },
  // Add more coach objects as needed
];

export default function Coach() {
  return (
    <div className="coach-container">
      <h1>Our Coaches</h1>
      <div className="coach-grid">
        {coaches.map((coach, index) => (
          <div key={index} className="coach-card">
            <div className="image-container">
              <img src={coach.image} alt={coach.name} />
              <div className="overlay">
                <h3>{coach.name}</h3>
              </div>
            </div>
            <div className="card-details">
              <p>{coach.team}</p>
              <span>{coach.stats}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
