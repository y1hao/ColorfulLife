import React from 'react';
import { Typography, Tooltip, makeStyles } from '@material-ui/core';
import { InfoSharp } from '@material-ui/icons';

interface IProps{
    info?: string,
    children: string
}

const useStyles = makeStyles({
    root: {
        textAlign: "start",
        color: "#666666",
        fontSize: "15px",
        marginTop: 3
    }
})

export default function InputTitle(props: IProps) {
    const classes = useStyles();
    return <Typography className={classes.root}>
        {props.children}
        {
            props.info !== undefined &&
            <Tooltip title={props.info}>
                <InfoSharp fontSize="inherit" />
            </Tooltip>
        }
    </Typography>
}