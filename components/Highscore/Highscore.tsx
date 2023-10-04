import React from 'react';

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
      <ul>
        {highscores.map((score, index) => (
          <li key={index}>
            {score.username}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Highscore;
