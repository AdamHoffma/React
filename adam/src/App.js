import React from 'react';
import './App.css';
import Homepage from './components/home.js'
import UpdateStats from './components/update_stats.js'

function App() {
  return (
    <div className="App">
      <Homepage />
      <UpdateStats />
    </div>
  );
}

export default App;
