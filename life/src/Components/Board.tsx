import React, { useEffect } from 'react';
import { ICellConfig } from '../Common/Interfaces';
import Cell from './Cell';
import { makeStyles } from '@material-ui/core';

interface IProps {
    isPlayMode: boolean,
    width: string,
    map: ICellConfig[][]
}

export default function Board(props: IProps) {
    
    const classes = makeStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: props.width,
            margin: 'auto'
        },
        row: {
            display: 'flex'
        }
    })();

    return <div className={classes.root}>{
        props.map.map((row, i) => 
            <div className={classes.row} key={i}>{
                row.map((cell, j) => 
                    <Cell
                        key={j}
                        isPlayMode={props.isPlayMode}
                        config={
                            {
                                defaultSize: cell.defaultSize,
                                size: cell.size,
                                color: cell.color,
                                borderRadius: cell.borderRadius,
                                borderWidth: cell.borderWidth,
                                borderColor: cell.borderColor,
                                elevation: cell.elevation,
                                isAlive: cell.isAlive,
                                setIsAlive: cell.setIsAlive
                            }
                        }
                    />)    
            }</div>
        )
    }</div>
}