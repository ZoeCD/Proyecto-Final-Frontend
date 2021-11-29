import './App.css';
import React, {useState,useEffect} from 'react';
import {Routes,Route,Link,Outlet} from 'react-router-dom';
import AddDestination from './components/AddDestination';
import DestinationCard from './components/DestinationCard';
import Grid from './components/Grid';
import Button from './components/Button'



function Header(){
  return(
    <header>
      <nav className="nav">
        <h1 className="main-title">BucketList</h1>
      </nav>      
    </header>
  )
}

function FormButton({onAdd, showAdd}){
  return(
    <div>
      <Button
          color={showAdd ? '#C9ADA7': '#4A4E69'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
    </div>
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
  const [showAddDestination, setShowAddDestination] = useState (false)


  const destinations = [
    {
      'name': 'NAME',
      'description': 'ncwenfieii',
      'type':'city',
      'price':100,
      'done': true
    },
    {
      'name': 'NAME2',
      'description': 'ncwenfieii',
      'type':'city',
      'price':100,
      'done': false
    },
    {
      'name': 'NAME3',
      'description': 'ncwenfieii',
      'type':'city',
      'price':100,
      'done': true
    },
    {
      'name': 'NAME4',
      'description': 'ncwenfieii',
      'type':'city',
      'price':100,
      'done': false
    },

  ]

  return (
    <div>
      <Header/>
      <div className='App'>
        <FormButton
          onAdd={() => setShowAddDestination(!showAddDestination)}
          showAdd={showAddDestination}/>
        {showAddDestination && <AddDestination/>}      
        <Grid colCount={3} md={4}>
        { 
          destinations.length > 0 ? destinations.map(item => <DestinationCard destination={item}  />) : [<p>No destinations are found.</p>]
        }
        </Grid>

      </div>
      
    </div>
  );
}

export default App;
