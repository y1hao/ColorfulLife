import React from 'react';
import { BorderPolicy, ICellStyle } from '../Common/Interfaces';
import { Drawer, Button, makeStyles } from '@material-ui/core';

interface IProps {
    panelWidth: number,
    boardColor: string,
    setBoardColor: (value: string) => void,
    refreshFrequency: number,
    setRefreshFrequency: (value: number) => void,
    width: number,
    setWidth: (value: number) => void,
    height: number,
    setHeight: (value: number) => void,
    surviveRangeLower: number,
    setSurviveRangeLower: (value: number) => void,
    surviveRangeUpper: number,
    setSurviveRangeUpper: (value: number) => void,
    reproductionRangeLower: number,
    setReproductionRangeLower: (value: number) => void,
    reproductionRangeUpper: number,
    setReproductionRangeUpper: (value: number) => void,
    borderPolicy: BorderPolicy,
    setBorderPolicy: (value: BorderPolicy) => void,
    styles: ICellStyle[][]
    setStyles: (value: ICellStyle[][]) => void,
    isPanelOpen: boolean,
    isPlayMode: boolean,
    setIsPlayMode: (value: boolean) => void
}

export default function RightPanel(props: IProps) {
    const classes = makeStyles({
        root: {
            width: props.panelWidth
        },
        drawerPaper: {
            width: props.panelWidth
        }
    })();

    return <Drawer 
        variant="persistent" 
        anchor="right" 
        open={props.isPanelOpen} 
        className={classes.root}
        classes={{paper: classes.drawerPaper}}>
        {
            props.isPlayMode
            ? <Button onClick={() => props.setIsPlayMode(!props.isPlayMode)}>Set Seeds</Button>
            : <Button onClick={() => props.setIsPlayMode(!props.isPlayMode)}>Done</Button>
        }
    </Drawer>
}