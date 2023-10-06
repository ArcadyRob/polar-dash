import { useState, useEffect } from 'react';

interface Props {
  initialTime: number;
}

const useTimer = ({ initialTime }: Props) => {
  if (initialTime <= 0) throw new Error('Initial time must be greater than 0');

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const handleTimer = () => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    };

    const intervalId = setInterval(handleTimer, 1000);

    if (timeLeft <= 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return timeLeft;
};

export default useTimer;
