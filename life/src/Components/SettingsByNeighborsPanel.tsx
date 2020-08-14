import React from 'react';
import { IStyleSettingsPanelProps } from '../Common/Interfaces';
import InputTitle from './InputTitle';
import { Slider, Button, Paper, List, ListItem } from '@material-ui/core';
import ColorPicker from './ColorPicker';
import CellSample from './CellSample';
import Random from '../Common/Random';

export default function MakeSettingsByNeighborsPanel(tabName: "alive" | "dead", neighbors: number) {
  const index = tabName === 'dead' ? 0 : 1;

  const cellSampleWrapperStyle: React.CSSProperties = {
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20,
    width: 50,
    height: 50,
    padding: 15
  };

  return function (props: IStyleSettingsPanelProps) {
    const handleApplyToAll = () => {
      const style = props.styles[index][neighbors]
      for (let i = 0; i < 9; i++) {
        props.styles[index][i] = { ...style }
      }
      props.setStyles([...props.styles])
    }

    const handleRandom = () => {
      props.styles[index][neighbors] = Random.style();
      props.setStyles([...props.styles]);
    }

    const handleReset = () => {
      props.styles[index][neighbors] = props.template.styles[index][neighbors]
      props.setStyles([...props.styles])
    }

    return <div>
      <Paper square elevation={3} style={cellSampleWrapperStyle}>
        <CellSample {...props.styles[index][neighbors]} />
      </Paper>
      <InputTitle>Size</InputTitle>
      <Slider
        value={props.styles[index][neighbors].size / 10}
        valueLabelDisplay="auto"
        min={0}
        max={10}
        onChange={(e, v) => {
          props.styles[index][neighbors].size = (v as number) * 10
          props.setStyles([...props.styles])
        }}
      />
      <InputTitle>Shape</InputTitle>
      <Slider
        value={props.styles[index][neighbors].borderRadius / 5}
        valueLabelDisplay="auto"
        min={0}
        max={10}
        onChange={(e, v) => {
          props.styles[index][neighbors].borderRadius = (v as number) * 5
          props.setStyles([...props.styles])
        }}
      />
      <InputTitle>Elevation</InputTitle>
      <Slider
        value={props.styles[index][neighbors].elevation}
        valueLabelDisplay="auto"
        min={0}
        max={10}
        onChange={(e, v) => {
          props.styles[index][neighbors].elevation = (v as number)
          props.setStyles([...props.styles])
        }}
      />
      <InputTitle>Border Width</InputTitle>
      <Slider
        value={props.styles[index][neighbors].borderWidth / 5}
        valueLabelDisplay="auto"
        min={0}
        max={10}
        onChange={(e, v) => {
          props.styles[index][neighbors].borderWidth = (v as number) * 5
          props.setStyles([...props.styles])
        }}
      />
      <InputTitle>Color</InputTitle>
      <ColorPicker
        color={props.styles[index][neighbors].color}
        onChangeComplete={(color) => {
          props.styles[index][neighbors].color = color.hex
          props.setStyles([...props.styles])
        }}
      />
      <InputTitle>Background Color</InputTitle>
      <ColorPicker
        color={props.styles[index][neighbors].backgroundColor}
        onChangeComplete={(color) => {
          props.styles[index][neighbors].backgroundColor = color.hex
          props.setStyles([...props.styles])
        }}
      />
      <InputTitle>Border Color</InputTitle>
      <ColorPicker
        color={props.styles[index][neighbors].borderColor}
        onChangeComplete={(color) => {
          props.styles[index][neighbors].borderColor = color.hex
          props.setStyles([...props.styles])
        }}
      />
      <List>
        <ListItem>
          <Button variant="contained" fullWidth color="primary" onClick={handleReset}>
            Reset
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="contained" fullWidth color="primary" onClick={handleRandom}>
            Random
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="contained" fullWidth color="primary" onClick={handleApplyToAll}>
            Apply to all {tabName}
          </Button>
        </ListItem>
      </List>
    </div>
  }
}
