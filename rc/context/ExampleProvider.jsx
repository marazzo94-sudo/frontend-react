import React from 'react';
import ExampleContext from './ExampleContext';
import useExample from '../hooks/useExample';

function ExampleProvider({ children }) {
  const { count, setCount } = useExample();

  return (
    <ExampleContext.Provider value={{ count, setCount }}>
      {children}
    </ExampleContext.Provider>
  );
}

export default ExampleProvider;
