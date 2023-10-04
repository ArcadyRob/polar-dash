'use client'
import React from 'react';
import { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";

interface highscoreProps {
  highscores: {
    username: string;
    score: number
  }[];
}

function Highscore({ highscores }: highscoreProps) {

  return (
    <div>
      <h2>Highscores</h2>
      <Marquee className="flex max-w-xs">
        {highscores.map((score, index) => (
          <div key={index}>
            <div className="w-max px-2">{score.username}: {score.score}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Highscore;
