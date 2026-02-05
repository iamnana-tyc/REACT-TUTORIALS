
import { useRef, useState } from 'react'
import './App.css'

function App()
{
  const inputRef = useRef(null);

  const focusOnRef = () =>
  {
    //console.log(inputRef);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Focus on me'></input>
      <button onClick={focusOnRef}>Focus</button>

    </div>
  )
}

export default App
