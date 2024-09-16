import React, { useEffect, useState } from 'react';
import '../App.css';

const MyComponent = () => {

  const [count, setCount] = useState(0);

  //Run On Every Render 
  useEffect(() =>  
      console.log("I Render & Re-render every time!"));


  //Run Only Component Mount / Init [ ComponentDidMount ]
  //  useEffect(() => {
  //   console.log("I will run only one time!");
  // },[]);



  //On first render +  whenever dependency changes!  Component Update [ ComponentDidUpdate]
  // useEffect(() => {
  //   console.log(`I run one time & whenver you change the count!" ${count}`);
  // },[count]);


  // //On Component Mount & Unmount or removing the component componentWillUnmount 
  // useEffect(() => {
  //   console.log('Setup the connection between you and me....');
   
  //   return () =>{
  //       console.log('close the connection by by!');
  //        // Cleanup code, e.g., closing the WebSocket connection
  //   }
  // },[]); // Runs only on mount and unmount




// Function to handle incrementing the count
const increment = () => setCount(count + 1);

// Function to handle decrementing the count
const decrement = () => setCount(count - 1);


  return <>
            <div className="App">
                <header className="App-header">
                    <h1>First Component</h1>
                </header>
                <main>
                <p className="Counter-value">Count: {count}</p>
                <div className="Counter-buttons">
                    <button className="App-button" onClick={increment}>+</button>
                    <button className="App-button Minus" onClick={decrement}>-</button>
                </div>
                  
                </main>
                </div>
         </>;
}

export default MyComponent;
