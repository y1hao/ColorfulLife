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

    return <div className={classes.root}>{
        props.map.map((row) => 
            <div className={classes.row}>{
                row.map((cell) => 
                    <Cell
                        isPlayMode={props.isPlayMode}
                        config={
                            {
                                defaultSize: cell.defaultSize,
                                size: cell.size,
                                color: cell.color,
                                borderRadius: cell.borderRadius,
                                borderWidth: cell.borderWidth,
                                borderColor: cell.borderColor,
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