import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> I am a React App </h1>
        <p> This is really working!</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobby is diving</Person>
        <Person name="Stephany" age="26"/>
      </div>
    );
  }
}

export default App;
