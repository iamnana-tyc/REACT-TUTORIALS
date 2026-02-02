import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App()
{
  const [count, setCount] = useState(0);

  useEffect(() =>
  {
    document.title = `Count: ${count + 1}`;
  }, [count]);

  return (
    <div>
      <h1>useEffectHooks</h1>
      <button onClick={() => setCount(count + 1)}>Increement</button>
    </div>
  )
}

export default App
