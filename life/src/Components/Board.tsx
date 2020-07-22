import React from 'react';
import { ICellConfig } from '../Common/Interfaces';
import Cell from './Cell';
import { makeStyles } from '@material-ui/core';

interface IProps {
    map: Array<Array<ICellConfig>>
}

export default function Board(props: IProps) {
    const classes = makeStyles({
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        row: {
            display: 'flex'
        }
    })();


    return <div className={classes.root}>{
        props.map.map((row) => 
            <div className={classes.row}>{
                row.map((cell) => <Cell {...{...cell, size: 300/props.map[0].length}}/>)    
            }</div>
        )
    }</div>
}