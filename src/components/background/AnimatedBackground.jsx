import React, { useState, useEffect } from "react";

const PARTICLE_COLORS = ["#14b8a6", "#f43f5e", "#f59e0b", "#3b82f6", "#8b5cf6"];

const generateParticles = (count = 25) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 3,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
  }));

const AnimatedBackground = ({ mousePos }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles());
  }, []);

  return (
    <>
      <div className="animated-bg fixed inset-0 -z-10" />
      <div
        className="fixed inset-0 -z-5 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(20, 184, 166, 0.08), transparent 40%)`,
        }}
      />
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
};

export default AnimatedBackground;
