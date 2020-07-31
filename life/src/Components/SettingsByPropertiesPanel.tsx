import React from 'react';
import { IPropertyName, IStyleSettingsPanelProps } from '../Common/Interfaces';
import InputTitle from './InputTitle';
import { Slider, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import ColorPicker from './ColorPicker';

export default function makeSettingsByPropertiesPanel(tabName: "alive" | "dead", property: IPropertyName) {
    return function(props: IStyleSettingsPanelProps) {
        const index = tabName === "dead" ? 0 : 1
        const colorSummaryStyle: React.CSSProperties = {
            border: "2px #eeeeee solid",
            width: "100%",
            height: "1.5em"
        }

        const SizePanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <Slider 
                     defaultValue={props.styles[index][i].size / 10}
                     valueLabelDisplay="auto"
                     min={0}
                     max={10}
                     onChangeCommitted={(e, v) => {
                         props.styles[index][i].size = (v as number) * 10
                         props.setStyles([...props.styles])
                     }}
                />
            </div>)
        }
        </div>

        const ShapePanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <Slider 
                     defaultValue={props.styles[index][i].borderRadius / 5}
                     valueLabelDisplay="auto"
                     min={0}
                     max={10}
                     onChangeCommitted={(e, v) => {
                         props.styles[index][i].borderRadius = (v as number) * 5
                         props.setStyles([...props.styles])
                     }}
                />
            </div>)
        }
        </div>

        const ElevationPanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <Slider 
                     defaultValue={props.styles[index][i].elevation}
                     valueLabelDisplay="auto"
                     min={0}
                     max={10}
                     onChangeCommitted={(e, v) => {
                         props.styles[index][i].elevation = (v as number)
                         props.setStyles([...props.styles])
                     }}
                />
            </div>)
        }
        </div>

        const BorderWidthPanel = <div>
        {
            new Array(9).fill(0).map((v, i) => <div key={i}>
                <InputTitle>{`Neighbors = ${i}`}</InputTitle>
                <Slider 
                     defaultValue = {props.styles[index][i].borderWidth / 5}
                     valueLabelDisplay="auto"
                     min={0}
                     max={10}
                     onChangeCommitted={(e, v) => {
                         props.styles[index][i].borderWidth = (v as number) * 5
                         props.setStyles([...props.styles])
                     }}
                />
            </div>)
        }
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