import React from 'react';
import Greetings from './components/Greetings';
import './App.css';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import ReducerSample from './components/ReducerSample';

function App() {
  const onClick = (name: string)=>{
    console.log(`${name} says hello`);
  }

  const onSubmit = (form: {name: string, description: string}) => {
    console.log(form);
  }

  return (
    <>
      <ReducerSample />
    </>
  );
}

export default App;
