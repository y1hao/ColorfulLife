import React from 'react';
import { IPropertyName, IStyleSettingsPanelProps } from '../Common/Interfaces';
import InputTitle from './InputTitle';
import { Slider, Accordion, AccordionSummary, AccordionDetails, Button } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import ColorPicker from './ColorPicker';

export default function makeSettingsByPropertiesPanel(tabName: "alive" | "dead", property: IPropertyName) {
    return function(props: IStyleSettingsPanelProps) {
        const index = tabName === "dead" ? 0 : 1

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
        <Button onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].size = props.template.styles[index][i].size;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        <Button onClick={() => {

        }}>
            Random
        </Button>
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
        <Button onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].borderRadius = props.template.styles[index][i].borderRadius;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        <Button onClick={() => {
            
        }}>
            Random
        </Button>
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
        <Button onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].elevation = props.template.styles[index][i].elevation;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        <Button onClick={() => {
            
        }}>
            Random
        </Button>
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
        <Button onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].borderWidth = props.template.styles[index][i].borderWidth;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        <Button onClick={() => {
            
        }}>
            Random
        </Button>
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
        <Button onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].color = props.template.styles[index][i].color;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        <Button onClick={() => {
            
        }}>
            Random
        </Button>
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
        <Button onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].backgroundColor = props.template.styles[index][i].backgroundColor;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        <Button onClick={() => {
            
        }}>
            Random
        </Button>
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
        <Button onClick={() => {
            for (let i = 0; i < 9; i++) {
                props.styles[index][i].borderColor = props.template.styles[index][i].borderColor;
            }
            props.setStyles([...props.styles])
        }}>
            Reset
        </Button>
        <Button onClick={() => {
            
        }}>
            Random
        </Button>
        </div>

        return <div>
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