import React from 'react';
import { makeStyles} from '@material-ui/core';
import { ICellConfig } from '../Common/Interfaces';

interface IProps {
    config: ICellConfig,
    isPlayMode: boolean
}

export default function Cell(props: IProps) {
    const classes = makeStyles({
        container: {
            width: props.config.defaultSize,
            height: props.config.defaultSize,
            display: 'flex'
        },
        cell: {
            boxSizing: "border-box",
            width: props.config.size,
            height: props.config.size,
            borderRadius: props.config.borderRadius,
            borderWidth: props.config.borderWidth,
            borderColor: props.config.borderColor,
            alignSelf: 'center',
            '&:hover' : {
                transform: 'scale(1.1)'
            }
        },
        play: {
            backgroundColor: props.config.color
        },
        alive: {
            backgroundColor: 'green'
        },
        dead: {
            backgroundColor: 'blue'
        },
    })();
    
    //console.log(`cell: ${props.isPlayMode}`);

    return (
        <div className={classes.container}>
            <div className={`${classes.cell} ${props.isPlayMode ? classes.play : props.config.isAlive ? classes.alive : classes.dead}`} 
            onClick={() => props.isPlayMode && props.config.setIsAlive(!props.config.isAlive)}/>
        </div>
    )
}