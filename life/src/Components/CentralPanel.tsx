import React, { useState, useEffect } from 'react';
import Board from './Board';
import { IGame, BorderPolicy, ICellStyle, ICellConfig } from '../Common/Interfaces';
import { Container, makeStyles, Button, Paper } from '@material-ui/core';

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
    surviveRangeLower: number,
    surviveRangeUpper: number,
    reproductionRangeLower: number,
    reproductionRangeUpper: number,
    borderPolicy: BorderPolicy,
    styles: ICellStyle[][]
}

const useStyles = makeStyles({
    root: {
        margin: "auto",
        width: "80vh",
        padding: "5vh"
    },
    paper: {
        overflow: "hidden"
    }
})

export default function CentralPanel(props: IProps) {
    const classes = useStyles();

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

    useEffect(() => {
        const seedsCopy = new Array(props.height);
        for (let i = 0; i < props.height; i++) {
            seedsCopy[i] = [...props.seeds[i]];
        setSeeds(seedsCopy);
    }}, [props.isPlayMode])

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
        setMap([...getMap(props.seeds, getNeighbors(props.seeds, neighbors), map)]);
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
            }
        }
        if (props.borderPolicy === BorderPolicy.alive) {
            adjustForAlivePolicy(neighbors);
        } else if (props.borderPolicy === BorderPolicy.roll) {
            adjustForRollPolicy(seeds, neighbors);
        }
        return neighbors;
    }

    function adjustForAlivePolicy(neighbors: number[][]) {
        for (let i = 0; i < props.height; i++) {
            neighbors[i][0] += 3;
            neighbors[i][props.width - 1] += 3;
        }
        for (let j = 1; j < props.width - 1; j++) {
            neighbors[0][j] += 3;
            neighbors[props.height - 1][j] += 3;
        }
        neighbors[0][0] += 2;
        neighbors[0][props.width - 1] += 2;
        neighbors[props.height - 1][0] += 2;
        neighbors[props.height - 1][props.width - 1] += 2;
    }

    function adjustForRollPolicy(seeds: boolean[][], neighbors: number[][]) {
        for (let i = 0; i < props.height; i++) {
            neighbors[i][0] += +(i - 1 >=0 && seeds[i - 1][props.width - 1]);
            neighbors[i][0] += +(seeds[i][props.width - 1]);
            neighbors[i][0] += +(i + 1 < props.height && seeds[i + 1][props.width - 1]);
            neighbors[i][props.width - 1] += +(i - 1 >=0 && seeds[i - 1][0]);
            neighbors[i][props.width - 1] += +(seeds[i][0]);
            neighbors[i][props.width - 1] += +(i + 1 < props.height && seeds[i + 1][0]);
        }
        for (let j = 0; j < props.width; j++) {
            neighbors[0][j] += +(j - 1 >= 0 && seeds[props.height - 1][j - 1]);
            neighbors[0][j] += +(seeds[props.height - 1][j]);
            neighbors[0][j] += +(j + 1 < props.width && seeds[props.height - 1][j + 1]);
            neighbors[props.height - 1][j] += +(j - 1 >= 0 && seeds[0][j - 1]);
            neighbors[props.height - 1][j] += +(seeds[0][j]);
            neighbors[props.height - 1][j] += +(j + 1 < props.width && seeds[0][j + 1]);
        }
        neighbors[0][0] += +seeds[props.height - 1][props.width - 1];
        neighbors[0][props.width - 1] += +seeds[props.height - 1][0];
        neighbors[props.height - 1][0] += +seeds[0][props.width - 1];
        neighbors[props.height - 1][props.width - 1] += +seeds[0][0];
    }

    function getNextSeeds(seeds: boolean[][], neighbors: number[][]) {
        for (let i = 0; i < props.height; i++) {
            for (let j = 0; j < props.width; j++) {
                if (seeds[i][j] && (neighbors[i][j] < props.surviveRangeLower || neighbors[i][j] > props.surviveRangeUpper))
                    seeds[i][j] = false;
                else if (!seeds[i][j] &&  neighbors[i][j] <= props.reproductionRangeUpper && neighbors[i][j] >= props.reproductionRangeLower)
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
                    backgroundColor: style.backgroundColor,
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

    return <div className={classes.root}>
    <Paper elevation={10} className={classes.paper}>
        <Board isPlayMode={props.isPlayMode} map={map} width={boardWidth} />
    </Paper>
    {   
        props.isPlayMode && (
            props.isPlaying
            ? <Button onClick={handleStop} disabled={!props.isPlayMode}>Stop</Button>
            : <Button onClick={handlePlay} disabled={!props.isPlayMode}>Play</Button>
        ) 
    }
    </div>
}