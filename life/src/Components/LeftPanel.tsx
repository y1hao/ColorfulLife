import React from 'react';
import { Drawer, Button, makeStyles } from '@material-ui/core';
import { prependOnceListener } from 'process';

interface IProps {
    panelWidth: number,
    name: string,
    setName: (value: string) => void,
    time: Date,
    author: string,
    setAuthor: (value: string) => void,
    description: string,
    setDescription: (value: string) => void,
    isPanelOpen: boolean
}

export default function LeftPanel(props: IProps) {
    const classes = makeStyles({
        root: {
            width: props.panelWidth
        },
        drawerPaper: {
            width: props.panelWidth
        }
    })();

    const handleSetName = (name: string) => props.setName(name);
    const handleSetDescription = (description: string) => props.setDescription(description);
    return <Drawer 
            variant="persistent" 
            open={props.isPanelOpen} 
            className={classes.root} 
            classes={{paper: classes.drawerPaper}}>
        Place holder for left panel
    </Drawer>
}