import React, { useState } from 'react';
import { Drawer, Button, makeStyles, Typography, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import { CreateSharp } from '@material-ui/icons';
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

    const [nameDialogOpen, setNameDialogOpen] = useState<boolean>(false);

    const nameDialog = <Dialog open={nameDialogOpen}>
        <DialogTitle>
            Game Title
        </DialogTitle>
        <DialogContent> 
        <TextField
            id="nameInput"
            autoFocus
            defaultValue={props.name} 
        />
        </DialogContent>
        <DialogActions>
            <Button onClick={() => {
                props.setName((document.getElementById("nameInput") as any).value);
                setNameDialogOpen(false);
            }}>
                Save
            </Button>
        </DialogActions>
    </Dialog>
        
    return <Drawer 
            variant="persistent" 
            open={props.isPanelOpen} 
            className={classes.root} 
            classes={{paper: classes.drawerPaper}}>
        <Typography variant="h4">
            {props.name}
            <CreateSharp fontSize="small" onClick={() => setNameDialogOpen(true)}/>
        </Typography>
        {nameDialog}
        <Typography variant="body1">{props.author}<CreateSharp fontSize="inherit"/></Typography>
        <Typography variant="body1">{props.description}<CreateSharp fontSize="inherit"/></Typography>
    </Drawer>
}