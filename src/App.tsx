import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import {Fruit} from './types/fruit';

const fruits: Fruit[] = [
  {
    name: 'apples',
    price: 100
  },
  {
    name: 'pinapples',
    price: 200
  },
  {
    name: 'oranges',
    price: 400
  },
  {
    name: 'bananas',
    price: 600
  }
]

function App() {
  const handleClick = () => {
    console.log('hello')
  }
  return (
    <div className="App">
      <Header fruits={fruits} show={true}/>
      <Button onClick={handleClick}>Button name</Button>
    </div>
  );
}

export default App;
