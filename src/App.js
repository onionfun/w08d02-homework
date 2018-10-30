import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import CrimesContain from './CrimeContainer/crimecontainer';

class App extends Component {
  constructor(){
    super();
    this.state={
      loggedIn: false,
      username: ''
    }
  }
  login=(e)=>{
    e.preventDefault();
    console.log("hey")
    this.setState({
      loggedIn: true,
    })
  }

  handleLoginInput =(e)=>{
    this.setState({
      username: e.currentTarget.value
    })
  }
  render() {
    return (
      <div className="App">
{this.state.loggedIn ?
  <CrimesContain />:
  <form onSubmit={this.login}>
    <input onChange={this.handleLoginInput} type="text" name="username"/>
    <input type="submit"/>
  </form> 
  }



      </div>
    );
  }
}

export default App;
