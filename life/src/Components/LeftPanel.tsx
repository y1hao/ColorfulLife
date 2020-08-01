import React, { useState } from 'react';
import { Drawer, Button, makeStyles, Typography, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Divider, Select, MenuItem } from '@material-ui/core';
import { CreateSharp } from '@material-ui/icons';
import InputTitle from './InputTitle';
import { IGame } from '../Common/Interfaces';
import Templates from '../Common/Templates';

interface IProps {
    panelWidth: number,
    name: string,
    setName: (value: string) => void,
    time: Date,
    author: string,
    setAuthor: (value: string) => void,
    description: string,
    setDescription: (value: string) => void,
    isPanelOpen: boolean,
    template: IGame,
    setTemplate: (value: IGame) => void
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
        <Button onClick={() => setIsOpen(false)}>
            Cancel
        </Button>
    </DialogActions>
</Dialog>

export default function LeftPanel(props: IProps) {
    const classes = makeStyles({
        root: {
            width: props.panelWidth
        },
        drawerPaper: {
            width: props.panelWidth,
            border: 'none'
        }
    })();

    const [isNameDialogOpen, setIsNameDialogOpen] = useState<boolean>(false);
    const [isAuthorDialogOpen, setIsAuthorDialogOpen] = useState<boolean>(false);
    const [isDescriptionDialogOpen, setIsDescriptionDialogOpen] = useState<boolean>(false);


    return <Drawer 
            variant="persistent" 
            open={props.isPanelOpen} 
            className={classes.root} 
            classes={{paper: classes.drawerPaper}}
            PaperProps={{elevation: 10}}
            >
        <InputTitle>Game Title</InputTitle>
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
        <InputTitle>Author</InputTitle>
        <Typography variant="body1">
            {props.author}
            <CreateSharp fontSize="inherit" onClick={() => setIsAuthorDialogOpen(true)}/>
        </Typography>
        {
            inputDialog(
                isAuthorDialogOpen, 
                "Author Name",
                "AuthorNameInput",
                props.author, 
                setIsAuthorDialogOpen,
                props.setAuthor)
        }
        <Divider />
        <InputTitle>Description</InputTitle>
        <Typography variant="body1">
            {props.description}
            <CreateSharp fontSize="inherit" onClick={() => setIsDescriptionDialogOpen(true)}/>
        </Typography>
        {
            inputDialog(
                isDescriptionDialogOpen, 
                "Game Description",
                "DescriptionInput",
                props.description, 
                setIsDescriptionDialogOpen,
                props.setDescription)
        }

        <InputTitle>Choose Template</InputTitle>
        <Select 
            value={props.template.name} 
            onChange={(e) => {
                const template = Templates.find(t => t.name === e.target.value as string)
                props.setTemplate(template as IGame)
            }}
        >
        {
            Templates.map((v, i) => <MenuItem key={i} value={v.name}>
                {v.name}
            </MenuItem>)
        }
        </Select>
        <Button>
            Load from file
        </Button>
        <Button>
            Save to file
        </Button>
    </Drawer>
}