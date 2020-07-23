import React from 'react';
import Board from './Board';
import { IGame, BorderPolicy, ICellStyle } from '../Common/Interfaces';
import { Container, makeStyles } from '@material-ui/core';

interface IProps {
    isPlayMode: boolean,
    isPlaying: boolean,
    setIsPlaying: (value: boolean) => void,
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
    const defaultBoardWidth = '80vh';
    const defaultCellSize = `calc(${defaultBoardWidth}/${props.width})`;

    const map = props.seeds.map((row) =>
        row.map((cell) => {
            return {
                isPlayMode: false,
                defaultSize: defaultCellSize,
                size: '100%',
                color: 'yellow',
                borderRadius: '20%',
                borderWidth: '2px',
                borderColor: 'green',
                isAlive: cell,
                setIsAlive: () => null
            }
        })
    )

    return <Container>
        <Board map={map} width={defaultBoardWidth} />
    </Container>
}