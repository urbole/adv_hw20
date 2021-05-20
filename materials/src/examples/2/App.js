import {Timer} from "./components/Timer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Timer time={5000} 
        autostart={false} 
        step={1000} 
        onTick={(time) => console.log("Залишилось часу: " + time)}
        onTimeStart={(timeLeft) => console.log("Таймер запущено!")}
        onTimePause={(timeLeft) => console.log("Таймер на паузі!")}
        onTimeEnd={() => console.log("Час вийшов!")} />

      <Timer time={6000000} 
        autostart={true} 
        step={2000} 
        onTick={(time) => console.log("Залишилось часу: " + time)}
        onTimeStart={(timeLeft) => console.log("Таймер запущено!")}
        onTimePause={(timeLeft) => console.log("Таймер на паузі!")}
        onTimeEnd={() => console.log("Час вийшов!")} />
    </div>
  );
}

export default App;
