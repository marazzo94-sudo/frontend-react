import { useState } from 'react';

export default function useExample(initial = 0) {
  const [count, setCount] = useState(initial);
  return { count, setCount };
}
