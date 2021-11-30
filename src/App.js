import './App.css';
import React, { useState } from 'react';
import AddDestination from './components/AddDestination';
import Button from './components/Button'
import Destinations from './Destinations';



function Header({ stateChanger }) {
  const updateUser = () => {
    var username = document.querySelector('input[name=username]').value;
    stateChanger(username);
  }

  return (
    <header>
      <nav className="nav">
        <h1 className="main-title">Bucketlist</h1>
        <div>
          <text style={{marginRight: 10 + 'px'}}>Username:</text>
          <input type="text" placeholder="username" defaultValue='' name="username"
            onChange={updateUser} />
        </div>
      </nav>
    </header>
  )
}

function DestForm(username) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button
        color={visible ? '#C9ADA7' : '#4A4E69'}
        text={visible ? 'Close' : 'Add'}
        onClick={() => setVisible(visible === false)}
      />
      {visible && <AddDestination username={username.username} />}
    </div>
  )
}


function App() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <Header username={username} stateChanger={setUsername} />
      {username !== '' && <div className='App'>
        <DestForm username={username} />
        <Destinations username={username} />
      </div>}
      {username === '' && <div className='App'>
        <h2>Search for a name</h2>
      </div>}
    </div>
  );
}

export default App;
