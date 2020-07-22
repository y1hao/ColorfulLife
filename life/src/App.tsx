import React, { useState } from 'react';
import './App.css';
import CentralPanel from './Components/CentralPanel';
import { IGame, BorderPolicy, ICellStyle } from './Common/Interfaces';
import LeftPanel from './Components/LeftPanel';
import RightPanel from './Components/RightPanel';
import { Grid } from '@material-ui/core';

function App() {
  const defaultWidth = 20;
  const defaultHeight = 20;

  const defaultSeeds: boolean[][] = new Array(defaultHeight);
  for (let i = 0; i < defaultHeight; ++i) {
    defaultSeeds[i] = new Array(defaultWidth).fill(false);
  }

  const defaultStyle = {
    size: 5,
    color: 'red',
    borderRadius: '20%',
    borderWidth: '2',
    borderColor: 'blue'
  }

  const defaultStyles = [
    new Array(9).fill(defaultStyle),
    new Array(9).fill(defaultStyle)
  ]

  const [name, setName] = useState<string>("")
    , [author, setAuthor] = useState<string>("")
    , [description, setDescription] = useState<string>("")
    , [time, setTime] = useState<Date>(new Date())
    , [refreshFrequency, setRefreshFrequency] = useState<number>(10)
    , [width, setWidth] = useState<number>(defaultWidth)
    , [height, setHeight] = useState<number>(defaultHeight)
    , [seeds, setSeeds] = useState<boolean[][]>(defaultSeeds)
    , [starveCriterion, setStarveCriterion] = useState<number>(3)
    , [reviveCriterion, setReviveCriterion] = useState<number>(5)
    , [borderPolicy, setBorderPolicy] = useState<BorderPolicy>(BorderPolicy.dead)
    , [styles, setStyles] = useState<ICellStyle[][]>(defaultStyles);

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={3}>
          <LeftPanel
            name={name}
            setName={setName}
            author={author}
            setAuthor={setAuthor}
            time={time}
            description={description}
            setDescription={setDescription}
          />
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={3}>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

