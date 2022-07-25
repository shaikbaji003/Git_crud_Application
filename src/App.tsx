import { useState } from 'react';
import './App.css';
import CardList from './Components/CardList';
import Header from './Components/Header';

function App() {
  const[search,setSearch]=useState('')
  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <CardList search={search}/>
    </div>
  );
}

export default App;
