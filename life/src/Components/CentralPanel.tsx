import React, { useState } from 'react';
import Board from './Board';
import { IGame, BorderPolicy, ICellStyle, ICellConfig } from '../Common/Interfaces';
import { Container, makeStyles, Button } from '@material-ui/core';

interface IProps {
    isPlayMode: boolean,
    isPlaying: boolean,
    setIsPlaying: (value: boolean) => void,
    setIsPanelOpen: (value: boolean) => void,
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

    const defaultMap = props.seeds.map((row) =>
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
    }))

    const [map, setMap] = useState<ICellConfig[][]>(defaultMap);

    const handlePlay = () => {
        props.setIsPanelOpen(props.isPlaying);
        props.setIsPlaying(!props.isPlaying);
    }

    const neighbors: number[][] = new Array(props.height);
    for (let i = 0; i < props.height; i++) {
        neighbors[i] = new Array(props.width).fill(0);
    }

    const getNeighbors = (seeds: boolean[][], neighbors: number[][]) => {
        for (let i = 0; i < props.height; i++) {
            for (let j = 0; j < props.width; j++) {
                neighbors[i][j] = 0;

                if (seeds[i][j - 1])      neighbors[i][j]++;
                if (seeds[i][j + 1])      neighbors[i][j]++;
                if (seeds[i - 1][j - 1])  neighbors[i][j]++;
                if (seeds[i - 1][j])      neighbors[i][j]++;
                if (seeds[i - 1][j + 1])  neighbors[i][j]++;
                if (seeds[i + 1][j - 1])  neighbors[i][j]++;
                if (seeds[i + 1][j])      neighbors[i][j]++;
                if (seeds[i + 1][j + 1])  neighbors[i][j]++;

                if (props.borderPolicy === BorderPolicy.alive) {
                    if (i === 0 || i === props.height - 1) neighbors[i][j]++;
                    if (j === 0 || j === props.width - 1) neighbors[i][j]++;
                } else if (props.borderPolicy == BorderPolicy.roll) {
                    if (i === 0) {
                       neighbors[i][j] += +seeds[props.height - 1][j]; 
                    } else if (i === props.height - 1) {
                        neighbors[i][j] += +seeds[0][j];
                    }
                    if (j === 0) {
                        neighbors[i][j] += +seeds[i][props.width - 1];
                    } else if (j === props.width - 1) {
                        neighbors[i][j] += +seeds[i][0];
                    }
                }
            }
        }
        return neighbors;
    }

    const getNextSeeds = (seeds: boolean[][], neighbors: number[][]) => {
        for (let i = 0; i < props.height; i++) {
            for (let j = 0; j < props.width; j++) {
                if (seeds[i][j] && neighbors[i][j] < props.starveCriterion)
                    seeds[i][j] = false;
                else if (!seeds[i][j] && neighbors[i][j] > props.reviveCriterion)
                    seeds[i][j] = true;
            }
        }
        return seeds;
    }

    const refreshMap = (seeds: boolean[][], neighbors: number[][]) => {
        for (let i = 0; i < props.height; i++) {
            for (let j = 0; j < props.width; j++) {
                const style = props.styles[+seeds[i][j]][neighbors[i][j]];
                map[i][j].isPlayMode = props.isPlayMode;
                map[i][j].isAlive = seeds[i][j];
                map[i][j].defaultSize = defaultCellSize;
                map[i][j].size = style.size;
                map[i][j].color = style.color;
                map[i][j].borderRadius = style.borderRadius;
                map[i][j].borderWidth = style.borderWidth;
                map[i][j].borderColor = style.borderColor;
            }
        }
        setMap(map);
    }

    return <div>
        <Board map={defaultMap} width={defaultBoardWidth} />
        {
            props.isPlaying
            ? <Button onClick={handlePlay}>Stop</Button>
            :<Button onClick={handlePlay}>Play</Button>
        }
    </div>
}