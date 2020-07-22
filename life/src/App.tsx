import React from 'react';
import logo from './logo.svg';
import './App.css';
import CentralPanel from './Components/CentralPanel';
import { IGame } from './Common/Interfaces';

function App() {
  const map = [
    [true, false, true],
    [true, true, true],
    [false, true, false]
  ]

  const info = {
    name: "",
    author: "",
    time: new Date()
  }

  const style = {
    size: 10,
    color: 'red',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'blue'
  }

  const styles = [
    [style, style, style, style, style, style, style, style, style],
    [style, style, style, style, style, style, style, style, style]
  ]

  const game: IGame = {
    info: info,
    refreshFrequency: 2,
    width: 10,
    height: 10,
    seeds: map,
    starveCriterion: 2,
    reviveCriterion: 3,
    borderPolicy: 'dead',
    styles: styles
  }

  return (
    <div className="App">
      <CentralPanel {...game}/>
    </div>
  );
}

export default App;

