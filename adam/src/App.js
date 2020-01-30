import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/home.js'
import UpdateStats from './components/update_stats.js'
import PlayerPage from './components/player_page.js'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route exact path ="/update" render={ (props) => <UpdateStats {...props} isAuthed={true} />} /> 
      <Route exact path = "/player"
             render={ (props) => <PlayerPage {...props} isAuthed={true} /> }
      />
    </div>
  );
}

export default App;
