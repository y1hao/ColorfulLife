import React, { useState } from 'react';
import './App.css';
import CentralPanel from './Components/CentralPanel';
import { IGame, ICellStyle, BorderPolicy } from './Common/Interfaces';
import LeftPanel from './Components/LeftPanel';
import RightPanel from './Components/RightPanel';
import Templates from './Common/Templates';

function App() {
  const panelWidth = 300;

  const [ template,               setTemplate ]               = useState<IGame>(Templates[0])
      , [ name,                   setName ]                   = useState<string>(template.name)
      , [ author,                 setAuthor ]                 = useState<string>(template.author)
      , [ description,            setDescription ]            = useState<string>(template.description)
      , [ time,                   setTime ]                   = useState<Date>(template.time)
      , [ refreshFrequency,       setRefreshFrequency ]       = useState<number>(template.refreshFrequency)
      , [ width,                  setWidth ]                  = useState<number>(template.width)
      , [ height,                 setHeight ]                 = useState<number>(template.height)
      , [ seeds,                  setSeeds ]                  = useState<boolean[][]>(JSON.parse(JSON.stringify(template.seeds)))
      , [ surviveRangeLower,      setSurviveRangeLower ]      = useState<number>(template.surviveRangeLower)
      , [ surviveRangeUpper,      setSurviveRangeUpper ]      = useState<number>(template.surviveRangeUpper)
      , [ reproductionRangeLower, setReproductionRangeLower ] = useState<number>(template.reproductionRangeLower)
      , [ reproductionRangeUpper, setReproductionRangeUpper ] = useState<number>(template.reproductionRangeUpper)
      , [ borderPolicy,           setBorderPolicy ]           = useState<BorderPolicy>(template.borderPolicy)
      , [ styles,                 setStyles ]                 = useState<ICellStyle[][]>(JSON.parse(JSON.stringify(template.styles)))
      , [ isPlayMode,             setIsPlayMode ]             = useState<boolean>(true)
      , [ isPlaying,              setIsPlaying ]              = useState<boolean>(false)
      , [ isPanelOpen,            setIsPanelOpen ]            = useState<boolean>(true)
  
  const handleSetTemplate = (template: IGame) => {
    setTemplate(template);
    setName(template.name);
    setAuthor(template.author);
    setTime(template.time);
    setDescription(template.description);
    setRefreshFrequency(template.refreshFrequency);
    setWidth(template.width);
    setHeight(template.height);
    setSeeds(JSON.parse(JSON.stringify(template.seeds)));
    setSurviveRangeLower(template.surviveRangeLower);
    setSurviveRangeUpper(template.surviveRangeUpper);
    setReproductionRangeLower(template.reproductionRangeLower);
    setReproductionRangeUpper(template.reproductionRangeUpper);
    setBorderPolicy(template.borderPolicy);
    setStyles(JSON.parse(JSON.stringify(template.styles)));
  }

  return <div className="App">
    <LeftPanel
      panelWidth={panelWidth}
      name={name}
      setName={setName}
      author={author}
      setAuthor={setAuthor}
      time={time}
      description={description}
      setDescription={setDescription}
      isPanelOpen={isPanelOpen}
      template={template}
      setTemplate={handleSetTemplate}
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
      panelWidth={panelWidth}
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
      seeds={seeds}
      setSeeds={setSeeds}
      styles={styles}
      setStyles={setStyles}
      isPanelOpen={isPanelOpen}
      isPlayMode={isPlayMode}
      setIsPlayMode={setIsPlayMode}
      template={template}
    />
  </div>
}

export default App;
