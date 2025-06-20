import { useState } from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="app">
      <h1>Alexive Focus</h1>
      <Timer
        timeLeft={timeLeft}
        isRunning={isRunning}
        setTimeLeft={setTimeLeft}
      />
      <Controls setIsRunning={setIsRunning} setTimeLeft={setTimeLeft} />
    </div>
  );
}

export default App;
