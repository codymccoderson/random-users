import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Users</h1>
        <h2>We're Holding All The Cards</h2>
      </header>
      <div className="userArea">
        <UserCard/>
      </div>
    </div>
  );
}

export default App;
