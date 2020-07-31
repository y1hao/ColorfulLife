import React from 'react';
import { IStyleSettingsPanelProps } from '../Common/Interfaces';
import InputTitle from './InputTitle';
import { Slider } from '@material-ui/core';

export default function MakeSettingsByNeighborsPanel(tabName: "alive" | "dead", neighbors: number) {
    const index = tabName === "dead" ? 0 : 1;
    
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

            <InputTitle>Background Color</InputTitle>

            <InputTitle>Border Color</InputTitle>

        </div>
    }
}