'use client'
import React from 'react';
import { useEffect, useRef } from 'react';

interface highscoreProps {
  highscores: {
    username: string;
    score: number
  }[];
}

function Highscore({ highscores }: highscoreProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const container = containerRef.current!;

    function scroll() {
      container.style.transform = `translateX(${container.clientWidth}px)`;
      requestAnimationFrame(scroll);
    }

    scroll();

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return (
    <div>
      <h2>Highscores</h2>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide max-w-xs">
        {highscores.map((score, index) => (
          <div ref={containerRef} className="scrolling-text" key={index}>
            <div className="w-max">{score.username}: {score.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highscore;
