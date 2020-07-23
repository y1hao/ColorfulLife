import React from 'react';
import { BorderPolicy, ICellStyle } from '../Common/Interfaces';
import { Drawer } from '@material-ui/core';

interface IProps {
    refreshFrequency: number,
    setRefreshFrequency: (value: number) => void,
    width: number,
    setWidth: (value: number) => void,
    height: number,
    setHeight: (value: number) => void,
    starveCriterion: number,
    setStarveCriterion: (value: number) => void,
    reviveCriterion: number,
    setReviveCriterion: (value: number) => void,
    borderPolicy: BorderPolicy,
    setBorderPolicy: (value: BorderPolicy) => void,
    styles: ICellStyle[][]
    setStyles: (value: ICellStyle[][]) => void
}

export default function RightPanel(props: IProps) {
    return <Drawer variant="permanent" anchor="right">Place holder for right panel</Drawer>
}