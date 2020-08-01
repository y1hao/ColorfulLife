import React from 'react';
import { IStyleSettingsPanelProps } from '../Common/Interfaces';
import InputTitle from './InputTitle';
import { Slider, Accordion, AccordionSummary, AccordionDetails, makeStyles, Button } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import classes from '*.module.css';
import ColorPicker from './ColorPicker';
import Cell from './Cell';
import CellSample from './CellSample';

export default function MakeSettingsByNeighborsPanel(tabName: "alive" | "dead", neighbors: number) {
    const index = tabName === "dead" ? 0 : 1

    return function(props: IStyleSettingsPanelProps) {
        const handleApplyToAll = () => {
            const style = props.styles[index][neighbors]
            for (let i = 0; i < 9; i++) {
                props.styles[index][i] = {...style}
            }
            props.setStyles([...props.styles])
        }

        return <div>
            <CellSample {...props.styles[index][neighbors]}/>
            <InputTitle>Size</InputTitle>
            <Slider 
                defaultValue={props.styles[index][neighbors].size / 10}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                onChangeCommitted={(e, v) => {
                    props.styles[index][neighbors].size = (v as number) * 10
                    props.setStyles([...props.styles])
                }}
            />

            <InputTitle>Shape</InputTitle>
            <Slider 
                defaultValue={props.styles[index][neighbors].borderRadius / 5}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                onChangeCommitted={(e, v) => {
                    props.styles[index][neighbors].borderRadius = (v as number) * 5
                    props.setStyles([...props.styles])
                }}
            />

            <InputTitle>Elevation</InputTitle>
            <Slider 
                defaultValue={props.styles[index][neighbors].elevation}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                onChangeCommitted={(e, v) => {
                    props.styles[index][neighbors].elevation = (v as number)
                    props.setStyles([...props.styles])
                }}
            />

            <InputTitle>Border Width</InputTitle>
            <Slider 
                defaultValue = {props.styles[index][neighbors].borderWidth / 5}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                onChangeCommitted={(e, v) => {
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
             <Button>
                Reset
            </Button>
            <Button>
                Random
            </Button>
            <Button onClick={handleApplyToAll}>
                Apply to all {tabName === "dead" ? "dead" : "living"} cells
            </Button>
        </div>
    }
}
