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
            display: 'grid'
        },
        cell: {
            boxSizing: 'border-box',
            border: `${props.config.borderWidth} ${props.config.borderColor} solid`,
            width: props.config.size,
            height: props.config.size,
            borderRadius: props.config.borderRadius,
            alignSelf: 'center',
            justifySelf: 'center'
        },
        play: {
            backgroundColor: props.config.color
        },
        alive: {
            width: props.config.defaultSize,
            height: props.config.defaultSize,
            border: 'none',
            borderRadius: '50%',
            backgroundColor: 'green',
            '&:hover' : {
                transform: 'scale(1.1)'
            }
        },
        dead: {
            width: props.config.defaultSize,
            height: props.config.defaultSize,
            border: 'none',
            borderRadius: '50%',
            backgroundColor: '#eeeeee',
            '&:hover' : {
                transform: 'scale(1.1)'
            }
        },
    })();
    
    return (
        <div className={classes.container}>
            <div className={`${classes.cell} ${props.isPlayMode ? classes.play : props.config.isAlive ? classes.alive : classes.dead}`} 
            onClick={() => props.isPlayMode && props.config.setIsAlive(!props.config.isAlive)}/>
        </div>
    )
}