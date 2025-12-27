import { useEffect, useState } from 'react'

import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  return (
    <>
    
   <h1>just jokes</h1>
   <p>jokes:{jokes.length}</p>
   {
    jokes.map((joke) => (
      <div key={joke.id}>
        <h2>{joke.title}</h2>
        <p>{joke.content}</p>
      </div>
    ))
   }
    </>
  )
}

export default App
