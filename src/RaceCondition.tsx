import { useState } from 'react';

const INITIAL_STATE = {
  a: 0,
  b: 0,
};

export const RaceCondition = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const incrementA = () => {
    setState({ ...state, a: state.a + 1 });
  };

  const incrementB = () => {
    setState({ ...state, b: state.b + 1 });
  };

  const handleIncrementState = () => {
    incrementA();
    incrementB();
  };

  return (
    <div className="grid gap-2">
      <h1>Race Condition</h1>

      <h2>A: {state.a}</h2>
      <h2>B: {state.b}</h2>

      <button onClick={handleIncrementState}>Increment</button>
    </div>
  );
};
