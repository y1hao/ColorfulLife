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

const inputDialog = (
    isOpen: boolean, 
    heading: string, 
    id: string, 
    defaultValue: string,
    setIsOpen: (value: boolean) => void,
    setValue: (value: string) => void
) =>  <Dialog open={isOpen}>
    <DialogTitle>{heading}</DialogTitle>
    <DialogContent> 
    <TextField
        id={id}
        autoFocus
        defaultValue={defaultValue} 
    />
    </DialogContent>
    <DialogActions>
        <Button onClick={() => {
            setValue((document.getElementById(id) as any).value);
            setIsOpen(false);
        }}>
            Save
        </Button>
    </DialogActions>
</Dialog>

export default function LeftPanel(props: IProps) {
    const classes = makeStyles({
        root: {
            width: props.panelWidth
        },
        drawerPaper: {
            width: props.panelWidth
        }
    })();

    const [isNameDialogOpen, setIsNameDialogOpen] = useState<boolean>(false);
    
    return <Drawer 
            variant="persistent" 
            open={props.isPanelOpen} 
            className={classes.root} 
            classes={{paper: classes.drawerPaper}}>
        <Typography variant="h4">
            {props.name}
            <CreateSharp fontSize="small" onClick={() => setIsNameDialogOpen(true)}/>
        </Typography>
        {
            inputDialog(
                isNameDialogOpen, 
                "Game Title",
                "GameTitleInput",
                props.name, 
                setIsNameDialogOpen,
                props.setName)
        }
        <Typography variant="body1">{props.author}<CreateSharp fontSize="inherit"/></Typography>
        <Typography variant="body1">{props.description}<CreateSharp fontSize="inherit"/></Typography>
    </Drawer>
}