import React from 'react';
import Board from './Board';
import { IGame, BorderPolicy, ICellStyle } from '../Common/Interfaces';

interface IProps {
    refreshFrequency: number,
    width: number,
    height: number,
    seeds: boolean[][],
    setSeeds: (value: boolean[][]) => void,
    starveCriterion: number,
    reviveCriterion: number,
    borderPolicy: BorderPolicy,
    styles: ICellStyle[][]
}

export default function CentralPanel(props: IProps) {
    const map = props.seeds.map((row) => 
        row.map((cell) => {
            return {
                isPlayMode: false,
                size: 10,
                color: 'yellow',
                borderRadius: 0.5,
                borderWidth: 2,
                borderColor: 'green',
                isAlive: true,
                setIsAlive: () => null
            }
        })
    )
    
    return <Board map={map}/>
}