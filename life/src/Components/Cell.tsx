import React from 'react';
import { makeStyles} from '@material-ui/core';
import { ICellConfig } from '../Common/Interfaces';

type IProps = ICellConfig;

export default function Cell(props: IProps) {
    const classes = makeStyles({
        container: {
            width: props.defaultSize,
            height: props.defaultSize,
            display: 'flex'
        },
        cell: {
            boxSizing: "border-box",
            width: props.size,
            height: props.size,
            borderRadius: props.borderRadius,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
            alignSelf: 'center',
            '&:hover' : {
                transform: 'scale(1.1)'
            }
        },
        play: {
            backgroundColor: props.color
        },
        alive: {
            backgroundColor: 'green'
        },
        dead: {
            backgroundColor: 'blue'
        },
    })();
    
    console.log(`cell: ${props.isPlayMode}`);

    return (
        <div className={classes.container}>
            <div className={`${classes.cell} ${props.isPlayMode ? classes.play : props.isAlive ? classes.alive : classes.dead}`} 
            onClick={() => props.isPlayMode && props.setIsAlive(!props.isAlive)}/>
        </div>
    )
}