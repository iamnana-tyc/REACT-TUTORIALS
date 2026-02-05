
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import axios from 'axios';

function App()
{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() =>
  {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) =>
      {
        console.log(response)
        setData(response.data);
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
