import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ChromePicker, ColorResult } from 'react-color';

interface IProps {
    color: string,
    onChangeComplete: (color: ColorResult) => void
}

export default function ColorPicker(props: IProps) {
    const colorSummaryStyle: React.CSSProperties = {
        border: "2px #eeeeee solid",
        width: "100%",
        height: "1.5em"
    }

    return <Accordion elevation={0}>
        <AccordionSummary>
            <div style={{...colorSummaryStyle, backgroundColor: props.color}}/>
        </AccordionSummary>
        <AccordionDetails>
            <ChromePicker 
                disableAlpha
                color={props.color}
                onChangeComplete={props.onChangeComplete}
            />
        </AccordionDetails>    
    </Accordion>
}