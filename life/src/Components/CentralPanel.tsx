import React from 'react';
import Board from './Board';
import { IGame } from '../Common/Interfaces';

type IProps = IGame;

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