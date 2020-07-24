import React, { useState } from 'react';
import './App.css';
import CentralPanel from './Components/CentralPanel';
import { IGame, BorderPolicy, ICellStyle } from './Common/Interfaces';
import LeftPanel from './Components/LeftPanel';
import RightPanel from './Components/RightPanel';
import { Grid } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

function App() {
  const defaultWidth = 20;
  const defaultHeight = 20;

  const defaultSeeds: boolean[][] = new Array(defaultHeight);
  for (let i = 0; i < defaultHeight; ++i) {
    defaultSeeds[i] = new Array(defaultWidth);
    for (let j = 0; j < defaultWidth; j++) {
      defaultSeeds[i][j] = !!(i & j);
    }
  }

  const defaultStyleDead: ICellStyle[] = new Array(9);
  const defaultStyleAlive: ICellStyle[] = new Array(9);
  for (let i = 0; i < 9; i++) {
    defaultStyleDead[i] = {
      size: 100,
      //color: `rgb(${20 + (255-20)/9*i}, 20, 20)`,
      color: '#eeeeee',
      borderRadius: 0,
      borderWidth: 0,
      borderColor: 'gray',
      elevation: 0
    };
    defaultStyleAlive[i] = {
      size: 100,
      //color: `rgb(20, 20, ${20 + (255-20)/9*i})`,
      color: '#eeeeee',
      borderRadius: 0,
      borderWidth: 0,
      borderColor: 'gray',
      elevation: i
    };
  }

  const defaultStyles = [
    defaultStyleDead,
    defaultStyleAlive
  ]

  const [name, setName] = useState<string>("")
    , [author, setAuthor] = useState<string>("")
    , [description, setDescription] = useState<string>("")
    , [time, setTime] = useState<Date>(new Date())
    , [refreshFrequency, setRefreshFrequency] = useState<number>(10)
    , [width, setWidth] = useState<number>(defaultWidth)
    , [height, setHeight] = useState<number>(defaultHeight)
    , [seeds, setSeeds] = useState<boolean[][]>(defaultSeeds)
    , [surviveRangeLower, setSurviveRangeLower] = useState<number>(2)
    , [surviveRangeUpper, setSurviveRangeUpper] = useState<number>(3)
    , [reproductionRangeLower, setReproductionRangeLower] = useState<number>(3)
    , [reproductionRangeUpper, setReproductionRangeUpper] = useState<number>(3)
    , [borderPolicy, setBorderPolicy] = useState<BorderPolicy>(BorderPolicy.roll)
    , [styles, setStyles] = useState<ICellStyle[][]>(defaultStyles)
    , [isPlayMode, setIsPlayMode] = useState<boolean>(true)
    , [isPlaying, setIsPlaying] = useState<boolean>(false)
    , [isPanelOpen, setIsPanelOpen] = useState<boolean>(true)

  return (
    <div className="App">
      <LeftPanel
        name={name}
        setName={setName}
        author={author}
        setAuthor={setAuthor}
        time={time}
        description={description}
        setDescription={setDescription}
        isPlayMode={isPlayMode}
        setIsPlayMode={setIsPlayMode}
        isPlaying={isPlaying}
        isPanelOpen={isPanelOpen}
      />
      <CentralPanel
        isPlayMode={isPlayMode}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setIsPanelOpen={setIsPanelOpen}
        refreshFrequency={refreshFrequency}
        width={width}
        height={height}
        seeds={seeds}
        setSeeds={setSeeds}
        surviveRangeLower={surviveRangeLower}
        surviveRangeUpper={surviveRangeUpper}
        reproductionRangeLower={reproductionRangeLower}
        reproductionRangeUpper={reproductionRangeUpper}
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
        surviveRangeLower={surviveRangeLower}
        setSurviveRangeLower={setSurviveRangeLower}
        surviveRangeUpper={surviveRangeUpper}
        setSurviveRangeUpper={setSurviveRangeUpper}
        reproductionRangeLower={reproductionRangeLower}
        setReproductionRangeLower={setReproductionRangeLower}
        reproductionRangeUpper={reproductionRangeUpper}
        setReproductionRangeUpper={setReproductionRangeUpper}
        borderPolicy={borderPolicy}
        setBorderPolicy={setBorderPolicy}
        styles={styles}
        setStyles={setStyles}
        isPanelOpen={isPanelOpen}
      />
    </div>
  );
}

export default App;