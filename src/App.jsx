import { useState } from 'react';
import './App.css';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="container">
      {puppies.map((p) => {
        return (
          <p
            key={p.id}
            onClick={() => {
              setFeatPupId(p.id);
            }}
            className="name-box"
          >
            {p.name}
          </p>
        );
      })}
      {featPupId && (
        <div id="feat">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default App;
