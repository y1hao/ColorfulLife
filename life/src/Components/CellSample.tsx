import React from 'react';
import { ICellStyle } from '../Common/Interfaces';
import { Paper } from '@material-ui/core';

export default function CellSample(props: ICellStyle) {
    const paperStyle: React.CSSProperties = {
        margin: "auto",
        display: "grid",
        width: 50,
        height: 50,
        backgroundColor: props.backgroundColor
    }
    
    const cellStyle: React.CSSProperties = {
        alignSelf: "center",
        justifySelf: "center",
        boxSizing: "border-box",
        width: `${props.size}%`,
        height: `${props.size}%`,
        backgroundColor: props.color,
        border: `solid ${props.borderColor} ${props.borderWidth / 2}px`,
        boxShadow: `black 0 0 ${props.elevation}px`,
        borderRadius: `${props.borderRadius}%`
    }

    return <Paper square style={paperStyle}>
        <div style={cellStyle}>
        </div>
    </Paper>
}