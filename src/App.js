import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import recipelist from './recipelist.json'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipe json={recipelist} />
      </div>
    );
  }
}

export default App;
