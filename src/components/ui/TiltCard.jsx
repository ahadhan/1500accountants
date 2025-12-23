import React, { useRef } from "react";

export default function TiltCard({ children, maxTilt = 15 }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // cursor position inside card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // convert to tilt values
    const rotateY = ((x / rect.width) - 0.5) * (maxTilt * 2);
    const rotateX = ((y / rect.height) - 0.5) * -(maxTilt * 2);

    card.style.transform = `
      perspective(800px) 
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="transition-transform duration-300 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
