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

    //props.map.forEach(row => row.forEach(cell => console.log(`board: ${cell.isPlayMode}`)))

    console.log('rerender')
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
                                isAlive: cell.isAlive,
                                setIsAlive: cell.setIsAlive
                            }
                        }
                        // defaultSize={cell.defaultSize}
                        // size={cell.size} 
                        // color={cell.color} 
                        // borderRadius={cell.borderRadius}
                        // borderWidth={cell.borderWidth} 
                        // borderColor={cell.borderColor}
                        // isAlive={cell.isAlive} 
                        // setIsAlive={cell.setIsAlive} 
                    />)    
            }</div>
        )
    }</div>
}