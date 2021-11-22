import './App.css';
import React, {useState,useEffect} from 'react';
import {Routes,Route,Link,Outlet} from 'react-router-dom';

function Encabezado(){
  return(
    <header>
      <nav className="nav">
        <span className="nav-link"><Link to="/">BucketList</Link></span>
        <span className="nav-link"><Link to="/puntajes">Agregar</Link></span>        
      </nav>      
    </header>
  )
}

function Home(){
  return(
    <div>
      <h1>Hola</h1>
      <button variant="contained">+</button>
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
class AddDestination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Type:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="city">City</option>
            <option value="Monument">Monument</option>
            <option value="Activity">Activity</option>
          </select>
        </label>
        <br/>
        <label>
          Description:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Price:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Done:
          <input
            name="isDone"
            type="checkbox"
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>BucketList</h1>
      <Home/>
      <AddDestination/>
    </div>
  );
}

export default App;
