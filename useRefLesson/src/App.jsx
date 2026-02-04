
import { useRef, useState } from 'react'
import './App.css'

function App()
{
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  const increementStateCount = () =>
  {
    setStateCount(stateCount + 1);
  };

  const increementRefCount = () =>
  {
    refCount.current += 1;
    console.log(`Ref count: ${refCount.current} `);
  };

  return (
    <div>
      <p>State count: {stateCount}</p>
      <button onClick={increementStateCount}>Increement State count</button>

      <p>Ref count: {refCount.current}</p>
      <button onClick={increementRefCount}>Increement Ref count</button>
    </div>
  )
}

export default App
