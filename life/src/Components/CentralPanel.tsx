import React, { useState, useEffect } from 'react';
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
    underPopulationCriterion: number,
    overPopulationCriterion: number,
    borderPolicy: BorderPolicy,
    styles: ICellStyle[][]
}

export default function CentralPanel(props: IProps) {
    const boardWidth = '80vh';
    const defaultCellSize = `calc(${boardWidth}/${props.width})`;

    const defaultNeighbors: number[][] = new Array(props.height);
    for (let i = 0; i < props.height; i++) {
        defaultNeighbors[i] = new Array(props.width).fill(0);
    }

    const seedsCopy = new Array(props.height);
    for (let i = 0; i < props.height; i++) {
        seedsCopy[i] = [...props.seeds[i]];
    }

    const [seeds, setSeeds] = useState<boolean[][]>(seedsCopy);

    const [neighbors, setNeighbors] = useState<number[][]>(defaultNeighbors);

    const [map, setMap] = useState<ICellConfig[][]>(
        getMap(seeds, getNeighbors(seeds, neighbors), null)
    );

    const [refreshHandler, setRefreshHandler] = useState<any>(null);

    const handlePlay = () => {
        setRefreshHandler(setInterval(refresh, 1000 / props.refreshFrequency));
        props.setIsPanelOpen(props.isPlaying);
        props.setIsPlaying(!props.isPlaying);
    }

    const handleStop = () => {
        clearInterval(refreshHandler);
        setRefreshHandler(null);
        const seedsCopy = new Array(props.height);
        for (let i = 0; i < props.height; i++) {
            seedsCopy[i] = [...props.seeds[i]];
        } 
        setSeeds(seedsCopy);
        setNeighbors(getNeighbors(props.seeds, neighbors));
        setMap([...getMap(props.seeds, neighbors, map)]);
        props.setIsPanelOpen(props.isPlaying);
        props.setIsPlaying(!props.isPlaying);
    }

    function handleSetIsAlive(i: number, j: number, value: boolean) {
        props.seeds[i][j] = value;
        props.setSeeds([...props.seeds]);
    }

    function getNeighbors(seeds: boolean[][], neighbors: number[][]) {
        for (let i = 0; i < props.height; i++) {
            for (let j = 0; j < props.width; j++) {
                neighbors[i][j] = 0;
                if (seeds[i][j - 1])                      neighbors[i][j]++;
                if (seeds[i][j + 1])                      neighbors[i][j]++;
                if (seeds[i - 1] && seeds[i - 1][j - 1])  neighbors[i][j]++;
                if (seeds[i - 1] && seeds[i - 1][j])      neighbors[i][j]++;
                if (seeds[i - 1] && seeds[i - 1][j + 1])  neighbors[i][j]++;
                if (seeds[i + 1] && seeds[i + 1][j - 1])  neighbors[i][j]++;
                if (seeds[i + 1] && seeds[i + 1][j])      neighbors[i][j]++;
                if (seeds[i + 1] && seeds[i + 1][j + 1])  neighbors[i][j]++;

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

    function getNextSeeds(seeds: boolean[][], neighbors: number[][]) {
        for (let i = 0; i < props.height; i++) {
            for (let j = 0; j < props.width; j++) {
                if (seeds[i][j] && (neighbors[i][j] < props.underPopulationCriterion || neighbors[i][j] > props.overPopulationCriterion))
                    seeds[i][j] = false;
                else if (!seeds[i][j] &&  neighbors[i][j] <= props.overPopulationCriterion && neighbors[i][j] >= props.overPopulationCriterion)
                    seeds[i][j] = true;
            }
        }
        return seeds;
    }

    function getMap(seeds: boolean[][], neighbors: number[][], map: ICellConfig[][] | null) {
        if (map === null) 
            map = new Array(props.height);
        for (let i = 0; i < props.height; i++) {
            if (map[i] === undefined) 
                map[i] = new Array(props.width);
            for (let j = 0; j < props.width; j++) {
                const style = props.styles[+seeds[i][j]][neighbors[i][j]];
                map[i][j] = {
                    isAlive : seeds[i][j],
                    defaultSize : defaultCellSize,
                    size : `${style.size}%`,
                    color : style.color,
                    borderRadius : `${style.borderRadius}%`,
                    borderWidth: `calc(${boardWidth}/${props.width}*${style.borderWidth}*${style.size}/10000)`,
                    borderColor: style.borderColor,
                    elevation: style.elevation,
                    setIsAlive : handleSetIsAlive.bind(null, i, j)
                }
            }
        }
        return map;
    }

    function refresh() {
        const nextSeeds = getNextSeeds(seeds, neighbors);
        setSeeds(nextSeeds);
        const nextNeighbors = getNeighbors(nextSeeds, neighbors);
        setNeighbors(nextNeighbors);
        setMap([...getMap(nextSeeds, nextNeighbors, map)])
    }

    return <div>
        <Board isPlayMode={props.isPlayMode} map={map} width={boardWidth} />
        {
            props.isPlaying
            ? <Button onClick={handleStop} disabled={!props.isPlayMode}>Stop</Button>
            : <Button onClick={handlePlay} disabled={!props.isPlayMode}>Play</Button>
        }
    </div>
}