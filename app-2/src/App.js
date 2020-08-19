import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    
    this.state = {
      games: ["Skyrim", "Crusader Kings", "Sekiro", "Mount and Blade", "Minecraft"]
    }
  }
  render(){
    let gamesDisplay = this.state.games.map((element, index) => {
      return <h2 key = {index}> {element} </h2>
    })
  return <div className = "App"> {gamesDisplay} </div>
  }
}

export default App;
