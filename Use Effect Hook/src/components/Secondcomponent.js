import React, { useEffect, useState } from 'react';
import '../App.css';

const Secondcomponent = () => {

  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
const increment = () => setCount(count + 1);

// Function to handle decrementing the count
const decrement = () => setCount(count - 1);


  return <>
            <div className="App">
                <header className="App-header">
                    <h1>Second Component</h1>
                </header>
                <main>
                <p className="Counter-value">Second Count: {count}</p>
                <div className="Counter-buttons">
                    <button className="App-button" onClick={increment}>+</button>
                    <button className="App-button Minus" onClick={decrement}>-</button>
                </div>
                  
                </main>
                </div>
         </>;
}

export default Secondcomponent;
