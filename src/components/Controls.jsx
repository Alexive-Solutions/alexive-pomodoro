export default function Controls({ setIsRunning, setTimeLeft }) {
  return (
    <div className="controls">
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTimeLeft(25 * 60);
        }}
      >
        Reset
      </button>
    </div>
  );
}
