import React from 'react';
import { IStyleSettingsPanelProps } from '../Common/Interfaces';
import InputTitle from './InputTitle';
import { Slider, Accordion, AccordionSummary, AccordionDetails, makeStyles } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import classes from '*.module.css';

export default function MakeSettingsByNeighborsPanel(tabName: "alive" | "dead", neighbors: number) {
    const index = tabName === "dead" ? 0 : 1
    const colorSummaryStyle: React.CSSProperties = {
        border: "2px #eeeeee solid",
        width: "100%",
        height: "1.5em"
    }

    return function(props: IStyleSettingsPanelProps) {
        return <div>
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
            <Accordion elevation={0}>
                <AccordionSummary>
                    <div style={{...colorSummaryStyle, backgroundColor: props.styles[index][neighbors].color}}/>
                </AccordionSummary>
                <AccordionDetails>
                    <ChromePicker 
                        disableAlpha
                        color={props.styles[index][neighbors].color}
                        onChangeComplete={(color) => {
                            props.styles[index][neighbors].color = color.hex
                            props.setStyles([...props.styles])
                        }}
                    />
                </AccordionDetails>    
            </Accordion>


            <InputTitle>Background Color</InputTitle>
            <Accordion elevation={0}>
                <AccordionSummary>
                    <div style={{...colorSummaryStyle, backgroundColor: props.styles[index][neighbors].backgroundColor}}/>
                </AccordionSummary>
                <AccordionDetails>
                    <ChromePicker 
                        disableAlpha
                        color={props.styles[index][neighbors].backgroundColor}
                        onChangeComplete={(color) => {
                            props.styles[index][neighbors].backgroundColor = color.hex
                            props.setStyles([...props.styles])
                        }}
                    />
                </AccordionDetails>    
            </Accordion>

            <InputTitle>Border Color</InputTitle>
            <Accordion elevation={0}>
                <AccordionSummary>
                    <div style={{...colorSummaryStyle, backgroundColor: props.styles[index][neighbors].borderColor}}/>
                </AccordionSummary>
                <AccordionDetails>
                    <ChromePicker 
                        disableAlpha
                        color={props.styles[index][neighbors].borderColor}
                        onChangeComplete={(color) => {
                            props.styles[index][neighbors].borderColor = color.hex
                            props.setStyles([...props.styles])
                        }}
                    />
                </AccordionDetails>    
            </Accordion>

        </div>
    }
}
