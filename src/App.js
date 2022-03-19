import React from 'react';
import './App.css';

import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <h1>Projeto-Redux</h1>
      
      <div className='linha'>
        <Card title="Card1" red>TESTE 1</Card>
      </div>

      <div className='linha'>
        <Card title="Card2" green>TESTE 2</Card>
        <Card title="Card3" blue>TESTE 3</Card>
        <Card title="Card4" purple>TESTE 4</Card>
      </div>

    </div>
  )
}

export default App;
