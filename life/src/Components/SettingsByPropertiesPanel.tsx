import React from 'react';
import { IPropertyName, IStyleSettingsPanelProps } from '../Common/Interfaces';
import InputTitle from './InputTitle';
import { Slider, Accordion, AccordionSummary, AccordionDetails, Button, makeStyles, Tooltip, Paper, List, ListItem } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import ColorPicker from './ColorPicker';
import CellSample from './CellSample';
import Random from '../Common/Random';

export default function makeSettingsByPropertiesPanel(tabName: "alive" | "dead", property: IPropertyName) {
    return function(props: IStyleSettingsPanelProps) {
        const index = tabName === "dead" ? 0 : 1
        const cellSamplesWrapperStyle: React.CSSProperties = {
            margin: "auto",
            marginTop: 20,
            marginBottom: 20,
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",
            gridTemplateColumns: "1fr 1fr 1fr",
            width: "150px",
            padding: "15px"
        }

        const SizePanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <Slider 
                     value={props.styles[index][i].size / 10}
                     valueLabelDisplay="auto"
                     min={0}
                     max={10}
                     onChange={(e, v) => {
                         props.styles[index][i].size = (v as number) * 10
                         props.setStyles([...props.styles])
                     }}
                />
            </div>)
        }
        <List>
            <ListItem>
        <Button variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].size = props.template.styles[index][i].size;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        </ListItem>
        <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].size = Random.cellSize();
            }
            props.setStyles([...props.styles]);
        }}>
            Random
        </Button>
        </ListItem>
        </List>
        </div>

        const ShapePanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <Slider 
                     value={props.styles[index][i].borderRadius / 5}
                     valueLabelDisplay="auto"
                     min={0}
                     max={10}
                     onChange={(e, v) => {
                         props.styles[index][i].borderRadius = (v as number) * 5
                         props.setStyles([...props.styles])
                     }}
                />
            </div>)
        }
        <List>
            <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].borderRadius = props.template.styles[index][i].borderRadius;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        </ListItem>
        <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].borderRadius = Random.borderRadius();
            }
            props.setStyles([...props.styles]);
        }}>
            Random
        </Button>
        </ListItem>
        </List>
        </div>

        const ElevationPanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <Slider 
                     value={props.styles[index][i].elevation}
                     valueLabelDisplay="auto"
                     min={0}
                     max={10}
                     onChange={(e, v) => {
                         props.styles[index][i].elevation = (v as number)
                         props.setStyles([...props.styles])
                     }}
                />
            </div>)
        }
        <List>
            <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].elevation = props.template.styles[index][i].elevation;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        </ListItem>
        <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].elevation = Random.elevation();
            }
            props.setStyles([...props.styles]);
        }}>
            Random
        </Button>
        </ListItem>
        </List>
        </div>

        const BorderWidthPanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <Slider 
                     value = {props.styles[index][i].borderWidth / 5}
                     valueLabelDisplay="auto"
                     min={0}
                     max={10}
                     onChange={(e, v) => {
                         props.styles[index][i].borderWidth = (v as number) * 5
                         props.setStyles([...props.styles])
                     }}
                />
            </div>)
        }
        <List>
            <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].borderWidth = props.template.styles[index][i].borderWidth;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        </ListItem>
        <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].borderWidth = Random.borderWidth();
            }
            props.setStyles([...props.styles]);
        }}>
            Random
        </Button>
        </ListItem>
        </List>
        </div>

        const ColorPanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <ColorPicker
                    color={props.styles[index][i].color}
                    onChangeComplete={(color) => {
                       props.styles[index][i].color = color.hex
                       props.setStyles([...props.styles])
                    }}
                />
            </div>)
        }
        <List>
            <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].color = props.template.styles[index][i].color;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        </ListItem>
        <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].color = Random.color();
            }
            props.setStyles([...props.styles]);
        }}>
            Random
        </Button>
        </ListItem>
        </List>
        </div>

        const BackgroundColorPanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <ColorPicker
                    color={props.styles[index][i].backgroundColor}
                    onChangeComplete={(color) => {
                       props.styles[index][i].backgroundColor = color.hex
                       props.setStyles([...props.styles])
                    }}
                />
            </div>)
        }
        <List>
            <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].backgroundColor = props.template.styles[index][i].backgroundColor;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        </ListItem>
        <ListItem>
        <Button variant="contained" fullWidth color="primary"  onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].backgroundColor = Random.color();
            }
            props.setStyles([...props.styles]);
        }}>
            Random
        </Button>
        </ListItem>
        </List>
        </div>

        const BorderColorPanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <ColorPicker
                    color={props.styles[index][i].borderColor}
                    onChangeComplete={(color) => {
                       props.styles[index][i].borderColor = color.hex
                       props.setStyles([...props.styles])
                    }}
                />
            </div>)
        }
        <List>
            <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].borderColor = props.template.styles[index][i].borderColor;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        </ListItem>
        <ListItem>
        <Button  variant="contained" fullWidth color="primary" onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].borderColor = Random.color();
            }
            props.setStyles([...props.styles]);
        }}>
            Random
        </Button>
        </ListItem>
        </List>
        </div>

        return <div>
            <Paper style={cellSamplesWrapperStyle} square elevation={3}>
            {
                new Array(9).fill(0).map((v, i) => <Tooltip key={i} title={`Neighbors = ${i}`}>
                    <div>
                        <CellSample {...props.styles[index][i]}/>
                    </div>
                </Tooltip>)
            }
            </Paper>
            {
                property === "size"
                ? SizePanel : property === "shape"
                ? ShapePanel : property === "elevation"
                ? ElevationPanel : property === "borderWidth"
                ? BorderWidthPanel : property === "color"
                ? ColorPanel : property === "background"
                ? BackgroundColorPanel : BorderColorPanel
            }
        </div>
    }
}