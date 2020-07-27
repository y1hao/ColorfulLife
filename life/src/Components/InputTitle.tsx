import React from 'react';
import { Typography, Tooltip } from '@material-ui/core';
import { InfoSharp } from '@material-ui/icons';

interface IProps{
    info?: string,
    children: string
}

export default function InputTitle(props: IProps) {

    return <Typography>
        {props.children}
        {
            props.info !== undefined &&
            <Tooltip title={props.info}>
                <InfoSharp fontSize="inherit" />
            </Tooltip>
        }
    </Typography>
}