import React from 'react';
import { BorderPolicy, ICellStyle } from '../Common/Interfaces';

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
    return <p>Place holder for right panel</p>
}