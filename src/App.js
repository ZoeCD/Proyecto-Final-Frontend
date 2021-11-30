import './App.css';
import React, { useState } from 'react';
import Destinations from './Destinations';



function Header({ username }) {
  return (
    <header>
      <nav className="nav">
        <h1 className="main-title">Bucketlist</h1>
        <p>{username}</p>
        {username && <a href="./">
          <button>Log out</button>
        </a>}
      </nav>
    </header>
  )
}

function LoginForm({ stateChanger }) {
  const onSubmit = (ev) => {
    ev.preventDefault()
    var username = document.querySelector('input[name=username]').value;
    var password = document.querySelector('input[name=username]').value;
    fetch(`/api/login`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          stateChanger(username);
        } else {
          console.log(res);
          alert(res.message);
        }
      })

  }

  return (
    <form className='App' onSubmit={onSubmit}>
      <div className='form-component'>
        <label>Username</label>
        <input type='text' placeholder="name" name="username" />
      </div>
      <div className='form-component'>
        <label>Password</label>
        <input type='password' placeholder='password' name="password" />
      </div>
      <input type='submit' value='Login' className='btn btn-block' />
    </form>
  )
}


function App() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <Header username={username} />
      {username !== '' && <Destinations username={username}/>}
      {username === '' && <LoginForm stateChanger={setUsername} />}
    </div>
  );
}

export default App;
