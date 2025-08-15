import React, { useContext } from 'react';
import ExampleContext from '../context/ExampleContext';
import Button from '../components/Button';

function HomePage() {
  const { count, setCount } = useContext(ExampleContext);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
    </div>
  );
}

export default HomePage;
