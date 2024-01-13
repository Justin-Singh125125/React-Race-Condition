import './App.css';
import { RaceCondition } from './RaceCondition';
import { NoRaceCondition } from './NoRaceCondition';

function App() {
  return (
    <div className="grid grid-cols-2 gap-4 items-center w-screen h-screen p-10">
      <RaceCondition />
      <NoRaceCondition />
    </div>
  );
}

export default App;
