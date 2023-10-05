import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error during fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Elements from server:</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
