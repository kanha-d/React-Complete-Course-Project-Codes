import React, { useEffect, useState } from 'react';
import MyComponent from './components/MyComponent';
import Secondcomponent from './components/Secondcomponent';

function App() {

  const [comp,unMount] = useState(0)

  // useEffect(() => {
  //     setTimeout(()=>{
  //       unMount(1)
  //     },5000)
  // })

  return <>
    {comp === 0 ? <MyComponent/> : ''}
    <Secondcomponent/> 
  </>
  
}

export default App;
