import React, { Component } from 'react'
import Pokecard from './components/Pokecard'
import './App.css'
import Pokedex from './components/Pokedex'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex/>
      </div>
    )
  }
}
