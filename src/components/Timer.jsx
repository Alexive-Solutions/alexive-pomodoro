import { useEffect } from "react";

export default function Timer({ timeLeft, setTimeLeft, isRunning }) {
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, setTimeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (timeLeft === 0) {
    return <div className="timer">Time’s up! ⏰</div>;
  }

  return <div className="timer">{formatTime()}</div>;
}
