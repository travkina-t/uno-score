import './App.css';
import React, {useState} from 'react';
import User from './components/User';
import UserList from './components/UserList';

function App() {

  const [players, setPlayers] = useState([]);

  const addContact = (user) => {
  
    if(players) {
      setPlayers([...players, user]);

    }
    
  };
  

  return (
    <div className="App">
      <User addContact={addContact}/>
      <h1 style={{color:'#228B22'}}>UNO SCORE</h1>
      <UserList contacts={players} />
  
    </div>
  );
}

export default App;
