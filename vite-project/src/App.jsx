import { useState } from 'react';
import './App.css'
import { puppyList } from './data'

function App() {
  const [puppies, setPupies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppyList: ", puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featPupId);

  return (
    <div className='App'>
      {        
        puppies.map((puppy) => {
          return <p key = {puppy.id} onClick={() => {setFeatPupId(puppy.id)}} > {puppy.name}</p>
        })
      }

      {
        featPupId && 
        (<div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>)
      }
        
    </div>
  );
}



export default App
