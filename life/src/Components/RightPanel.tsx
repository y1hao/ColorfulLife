import React, { useState } from 'react';
import { ICellStyle, BorderPolicy, IGame } from '../Common/Interfaces';
import { Drawer, Button, makeStyles, Accordion, AccordionSummary, AccordionDetails, Typography, Slider, RadioGroup, FormControlLabel, Radio, Paper, Tabs, Tab, ListItem, List, Divider } from '@material-ui/core';
import InputTitle from './InputTitle';
import StyleSettingsPanel from './StyleSettingsPanel';
import Random from '../Common/Random';
import { ExpandMore } from '@material-ui/icons';

interface IProps {
  panelWidth: number,
  refreshFrequency: number,
  setRefreshFrequency: (value: number) => void,
  width: number,
  setWidth: (value: number) => void,
  height: number,
  setHeight: (value: number) => void,
  surviveRangeLower: number,
  setSurviveRangeLower: (value: number) => void,
  surviveRangeUpper: number,
  setSurviveRangeUpper: (value: number) => void,
  reproductionRangeLower: number,
  setReproductionRangeLower: (value: number) => void,
  reproductionRangeUpper: number,
  setReproductionRangeUpper: (value: number) => void,
  borderPolicy: BorderPolicy,
  setBorderPolicy: (value: BorderPolicy) => void,
  styles: ICellStyle[][]
  setStyles: (value: ICellStyle[][]) => void,
  seeds: boolean[][],
  setSeeds: React.Dispatch<React.SetStateAction<boolean[][]>>,
  isPanelOpen: boolean,
  isPlayMode: boolean,
  setIsPlayMode: (value: boolean) => void,
  template: IGame
};

export default function RightPanel(props: IProps) {
  const classes = makeStyles({
    drawerPaper: {
      boxSizing: 'border-box',
      width: props.panelWidth,
      padding: 15,
      border: 'none'
    },
    accordionDetails: {
      flexDirection: 'column'
    },
    heading: {
      marginTop: 15,
      marginBottom: 15
    },
    accordionSummary: {
      fontSize: '112%'
    },
    label: {
      fontSize: 14
    }
  })();

  const [isStyleSettingsPanelExpanded, setIsStyleSettingsPanelExpanded] = useState<boolean>(false)
  const [randomSeedsDensity, setRandomSeedsDensity] = useState<number>(5)

  const handleRandomGame = () => {
    setSize(Random.boardSize());
    props.setBorderPolicy(Random.borderPolicy());
    props.setRefreshFrequency(Random.refreshFrequency());

    const [reproductionRangeLower, reproductionRangeUpper] = [Random.neighbors(), Random.neighbors()].sort((a, b) => a - b);
    props.setReproductionRangeLower(reproductionRangeLower);
    props.setReproductionRangeUpper(reproductionRangeUpper);

    const [surviveRangeLower, surviveRangeUpper] = [Random.neighbors(), Random.neighbors()].sort((a, b) => a - b);
    props.setSurviveRangeLower(surviveRangeLower);
    props.setSurviveRangeUpper(surviveRangeUpper);
  }

  const handleResetGame = () => {
    props.setBorderPolicy(props.template.borderPolicy);
    setSize(props.template.height);
    props.setRefreshFrequency(props.template.refreshFrequency);
    props.setReproductionRangeLower(props.template.reproductionRangeLower);
    props.setReproductionRangeUpper(props.template.reproductionRangeUpper);
    props.setSurviveRangeLower(props.template.surviveRangeLower);
    props.setSurviveRangeUpper(props.template.surviveRangeUpper);
  }

  const handleRandomSeeds = () => {
    props.setSeeds(Random.seeds(props.height, props.width, randomSeedsDensity))
  }

  const handleClearSeeds = () => {
    const seeds = new Array(props.height)
    for (let i = 0; i < props.height; i++) {
      seeds[i] = new Array(props.width).fill(false)
    }
    props.setSeeds(seeds)
  }

  const handleResetSeeds = () => {
    props.setSeeds(() => {
      props.setHeight(props.template.height)
      props.setWidth(props.template.width)
      return JSON.parse(JSON.stringify(props.template.seeds))
    })
  }

  const setSize = (v: number) => {
    props.setSeeds(() => {
      props.setWidth(v);
      props.setHeight(v);
      const newSeeds = new Array(v);
      for (let i = 0; i < v; i++) {
        newSeeds[i] = new Array(v);
        for (let j = 0; j < v; j++) {
          if (props.seeds[i] === undefined || props.seeds[i][j] === undefined) {
            newSeeds[i][j] = false;
          } else {
            newSeeds[i][j] = props.seeds[i][j];
          }
        }
      }
      return newSeeds;
    });
  }

  const GameSettingsPanel = <div>
    <InputTitle>
      Board Size
    </InputTitle>
    <Slider
      value={props.width}
      valueLabelDisplay="auto"
      min={2}
      max={20}
      onChange={(e, v) => setSize(v as number)}
    />
    <InputTitle>
      Game Speed
    </InputTitle>
    <Slider
      value={props.refreshFrequency}
      valueLabelDisplay="auto"
      min={1}
      max={10}
      onChange={(e, v) => props.setRefreshFrequency(v as number)}
    />
    <InputTitle>
      Survival Range
    </InputTitle>
    <Slider
      value={[props.surviveRangeLower, props.surviveRangeUpper]}
      valueLabelDisplay="auto"
      min={0}
      max={8}
      onChange={(e, v) => {
        props.setSurviveRangeLower((v as number[])[0]);
        props.setSurviveRangeUpper((v as number[])[1]);
      }}
    />
    <InputTitle>
      Reproduction Range
    </InputTitle>
    <Slider
      value={[props.reproductionRangeLower, props.reproductionRangeUpper]}
      valueLabelDisplay="auto"
      min={0}
      max={8}
      onChange={(e, v) => {
        props.setReproductionRangeLower((v as number[])[0]);
        props.setReproductionRangeUpper((v as number[])[1]);
      }}
    />
    <InputTitle>
      Boarder Setting
    </InputTitle>
    <RadioGroup value={props.borderPolicy} onChange={(e, v) => props.setBorderPolicy(v as "alive" | "dead" | "roll")}>
      <FormControlLabel value="alive" classes={{label: classes.label}} control={<Radio color="primary" />} label="Alive" />
      <FormControlLabel value="dead" classes={{label: classes.label}} control={<Radio color="primary" />} label="Dead" />
      <FormControlLabel value="roll" classes={{label: classes.label}} control={<Radio color="primary" />} label="Roll over" />
    </RadioGroup>
    <List>
      <ListItem>
        <Button variant="contained" fullWidth color="primary" onClick={handleResetGame}>
          Reset
        </Button>
      </ListItem>
      <ListItem>
        <Button variant="contained" fullWidth color="primary" onClick={handleRandomGame}>
          Random
        </Button>
      </ListItem>
    </List>
    <Divider />
  </div>

  const SeedsSettingsPanal = <div>
    <List>
      <ListItem>
        {
          props.isPlayMode
            ? <Button variant="contained" color="primary" fullWidth onClick={() => props.setIsPlayMode(!props.isPlayMode)}>Set Seeds</Button>
            : <Button variant="contained" color="primary" fullWidth onClick={() => props.setIsPlayMode(!props.isPlayMode)}>Done</Button>
        }
      </ListItem>
      <ListItem>
        <Button variant="contained" fullWidth color="primary" onClick={handleClearSeeds}>
          Clear All
        </Button>
      </ListItem>
      <ListItem>
        <Button variant="contained" fullWidth color="primary" onClick={handleResetSeeds}>
          Reset
        </Button>
      </ListItem>
      <ListItem>
        <Button variant="contained" fullWidth color="primary" onClick={handleRandomSeeds}>
          Random
        </Button>
      </ListItem>
    </List>
    <InputTitle>Random Seeds Density</InputTitle>
    <Slider
      value={randomSeedsDensity}
      valueLabelDisplay="auto"
      min={1}
      max={9}
      onChange={(e, v) => setRandomSeedsDensity(v as number)}
    />
    <Divider />
  </div>

  return <Drawer
    variant="persistent"
    anchor="right"
    open={props.isPanelOpen}
    classes={{ paper: classes.drawerPaper }}
    PaperProps={{ elevation: 10 }}
  >
    <Typography variant="h5" className={classes.heading}>Settings</Typography>
    <Accordion elevation={0}>
      <AccordionSummary expandIcon={<ExpandMore />} className={classes.accordionSummary}>
        Game Settings
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {GameSettingsPanel}
      </AccordionDetails>
    </Accordion>
    <Accordion elevation={0}>
      <AccordionSummary expandIcon={<ExpandMore />} className={classes.accordionSummary}>
        Seed Settings
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {SeedsSettingsPanal}
      </AccordionDetails>
    </Accordion>
    <Accordion
      elevation={0}
      disabled={!props.isPlayMode}
      expanded={isStyleSettingsPanelExpanded && props.isPlayMode}
    >
      <AccordionSummary expandIcon={<ExpandMore />}
        className={classes.accordionSummary}
        onClick={() => setIsStyleSettingsPanelExpanded(!isStyleSettingsPanelExpanded)}>
        Cell Settings
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <StyleSettingsPanel
          template={props.template}
          styles={props.styles}
          setStyles={props.setStyles}
        />
        <Divider />
      </AccordionDetails>
    </Accordion>
  </Drawer>
}