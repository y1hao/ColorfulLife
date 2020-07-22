import React from 'react';
import { ICellConfig } from '../Common/Interfaces';
import Cell from './Cell';
import { makeStyles } from '@material-ui/core';

interface IProps {
    width: string,
    map: ICellConfig[][]
}

export default function Board(props: IProps) {
    
    const classes = makeStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: props.width
        },
        row: {
            display: 'flex'
        }
    })();


    return <div className={classes.root}>{
        props.map.map((row) => 
            <div className={classes.row}>{
                row.map((cell) => 
                    <Cell {...{...cell}}
                />)    
            }</div>
        )
    }</div>
}