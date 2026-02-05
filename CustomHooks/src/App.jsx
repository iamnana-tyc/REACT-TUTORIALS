import './App.css'
import useCounter from './useCounter'

function App()
{
  const { count, increement, decreement, reset } = useCounter(1);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increement}>Increement</button>
      <button onClick={decreement}>Decreement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
