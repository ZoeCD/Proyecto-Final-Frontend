import './App.css';
import React, {useState,useEffect} from 'react';
import {Routes,Route,Link,Outlet} from 'react-router-dom';
import AddDestination from './components/AddDestination';

function Encabezado(){
  return(
    <header>
      <nav className="nav">
        <span className="nav-link"><Link to="/">BucketList</Link></span>
      </nav>      
    </header>
  )
}



function Error404(){
  return(
    <div>
      <h1>404 (Not found)</h1>
      <Link to="/">Ir al Home</Link>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <h1>BucketList</h1>
      <AddDestination/>
    </div>
  );
}

export default App;
