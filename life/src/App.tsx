import React, { useState } from 'react';
import './App.css';
import CentralPanel from './Components/CentralPanel';
import { IGame, BorderPolicy, ICellStyle } from './Common/Interfaces';
import LeftPanel from './Components/LeftPanel';
import RightPanel from './Components/RightPanel';

function App() {
  const map = [
    [true, false, true],
    [true, true, true],
    [false, true, false]
  ]

  const style = {
    size: 10,
    color: 'red',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'blue'
  }

  const stylez = [
    [style, style, style, style, style, style, style, style, style],
    [style, style, style, style, style, style, style, style, style]
  ]

  const game: IGame = {
    name: "",
    author: "",
    time: new Date(),
    refreshFrequency: 2,
    width: 10,
    height: 10,
    seeds: map,
    starveCriterion: 2,
    reviveCriterion: 3,
    borderPolicy: BorderPolicy.dead,
    styles: stylez
  }

  const [name, setName] = useState<string>("")
      , [author, setAuthor] = useState<string>("")
      , [description, setDescription] = useState<string>("")
      , [time, setTime] = useState<Date>(new Date())
      , [refreshFrequency, setRefreshFrequency] = useState<number>(10)
      , [width, setWidth] = useState<number>(10)
      , [height, setHeight] = useState<number>(10)
      , [seeds, setSeeds] = useState<boolean[][]>([])
      , [starveCriterion, setStarveCriterion] = useState<number>(3)
      , [reviveCriterion, setReviveCriterion] = useState<number>(5)
      , [borderPolicy, setBorderPolicy] = useState<BorderPolicy>(BorderPolicy.dead)
      , [styles, setStyles] = useState<ICellStyle[][]>(stylez);



  return (
    <div className="App">
      <LeftPanel 
        name={name}
        setName={setName}
        author={author}
        setAuthor={setAuthor}
        description={description}
        setDescription={setDescription}
      />
      <CentralPanel
        refreshFrequency={refreshFrequency}
        width={width}
        height={height}
        seeds={seeds}
        setSeeds={setSeeds}
        starveCriterion={starveCriterion}
        reviveCriterion={reviveCriterion}
        borderPolicy={borderPolicy}
        styles={styles}
      />
      <RightPanel 
        refreshFrequency={refreshFrequency}
        setRefreshFrequency={setRefreshFrequency}
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        starveCriterion={starveCriterion}
        setStarveCriterion={setStarveCriterion}
        reviveCriterion={reviveCriterion}
        setReviveCriterion={setReviveCriterion}
        borderPolicy={borderPolicy}
        setBorderPolicy={setBorderPolicy}
        styles={styles}
        setStyles={setStyles}
      />
    </div>
  );
}

export default App;

