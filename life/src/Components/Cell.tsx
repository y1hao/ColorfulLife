import React from 'react';
import { makeStyles} from '@material-ui/core';
import { ICellConfig } from '../Common/Interfaces';

type IProps = ICellConfig;

export default function Cell(props: IProps) {
    const classes = makeStyles({
        cell: {
            width: props.size,
            height: props.size,
            borderRadius: props.borderRadius,
            borderWidth: props.borderWidth,
            '&:hover' : {
                transform: 'scale(1.1)'
            }
        },
        play: {
            backgroundColor: props.color,
            borderColor: props.borderColor
        },
        alive: {
            backgroundColor: 'green'
        },
        dead: {
            backgroundColor: 'gray'
        },
    })();
    
    return (
        <div className={`${classes.cell} ${props.isPlayMode ? classes.play : props.isAlive ? classes.alive : classes.dead}`} 
        onClick={() => props.isPlayMode && props.setIsAlive(!props.isAlive)}/>
    )
}