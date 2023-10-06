import { useTimer } from '.';

interface TimerProps {
  initialTime?: number;
}

const Timer = ({ initialTime = 30 }: TimerProps) => {
  const timeLeft = useTimer({ initialTime });

  return (
    <div role="timer" aria-atomic="true">
      <span className="color--on-tertiary">{timeLeft}</span>
    </div>
  );
};

export default Timer;
