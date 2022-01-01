import * as React from 'react';

type CounterProps = { initialCount: number; step: number };

function Counter({ initialCount = 0, step = 1 }: CounterProps) {
  const [count, setCount] = React.useState(initialCount);
  const increment = () => setCount((c) => c + step);
  return <button onClick={increment}>{count}</button>;
}

export default Counter;
