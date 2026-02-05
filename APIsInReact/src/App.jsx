
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App()
{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() =>
  {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json =>
      {
        setData(json);
        setLoading(false);
      })
      .catch((error) =>
      {
        console.error(`Error Fetching data: `, error);
        setError(`Falied to fetch the data`);
        setLoading(false);
      });
  }, []);

  if (loading)
  {
    return <p>Loading...</p>
  }

  if (error)
  {
    return <p>{error}</p>
  }
  return (
    <div>
      <h2>APIs</h2>
      <p>UserId: {data.userId}</p>
      <p>Id: {data.id}</p>
      <p>Title: {data.title}</p>

    </div>
  )
}

export default App
