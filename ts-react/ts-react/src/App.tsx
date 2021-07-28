import React from 'react';
import Greetings from './components/Greetings';
import './App.css';
import Counter from './components/Counter';

function App() {
  const onClick = (name: string)=>{
    console.log(`${name} says hello`);
  }

  return (
    <>
      <Counter/>
    </>
  );
}

export default App;
