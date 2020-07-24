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
            justifySelf: 'center',
            zIndex: props.config.elevation + 1
        },
        play: {
            backgroundColor: props.config.color,
            boxShadow: `#333333 0 0 ${props.config.elevation * 2}px`
        },
        alive: {
            width: props.config.defaultSize,
            height: props.config.defaultSize,
            border: 'none',
            borderRadius: '50%',
            backgroundColor: 'green',
            boxShadow: '#333333 0 0 5px',
            '&:hover' : {
                boxShadow: '#333333 0 0 10px'
            }
        },
        dead: {
            width: props.config.defaultSize,
            height: props.config.defaultSize,
            border: 'none',
            borderRadius: '50%',
            backgroundColor: '#eeeeee',
            '&:hover' : {
                boxShadow: '#333333 0 0 5px'
            }
        },
    })();
    
    return (
        <div className={classes.container} onClick={() => {
                //console.log(props.config.isAlive)
                if (!props.isPlayMode)
                    props.config.setIsAlive(!props.config.isAlive)
                //console.log(props.config.isAlive)
            }}
        >
            <div className={`${classes.cell} 
                ${props.isPlayMode 
                    ? classes.play 
                    : props.config.isAlive ? classes.alive : classes.dead}`} 
            />
        </div>
    )
}