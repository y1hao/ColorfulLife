import React, { useState } from 'react';
import { Drawer, Button, makeStyles, Typography, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Divider, Select, MenuItem, Input, List, ListItem } from '@material-ui/core';
import { CreateSharp } from '@material-ui/icons';
import InputTitle from './InputTitle';
import { IGame } from '../Common/Interfaces';
import Templates from '../Common/Templates/Templates';

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
    setTemplate: (value: IGame) => void,
    saveFile: () => void,
    readFile: (data: string) => void
}

const inputDialog = (
    isOpen: boolean,
    heading: string,
    id: string,
    defaultValue: string,
    setIsOpen: (value: boolean) => void,
    setValue: (value: string) => void
) => <Dialog open={isOpen}>
        <DialogTitle>{heading}</DialogTitle>
        <DialogContent>
            <TextField
                id={id}
                autoFocus
                defaultValue={defaultValue}
                multiline
            />
        </DialogContent>
        <DialogActions>
            <Button
                onClick={() => {
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
        drawerPaper: {
            boxSizing: "border-box",
            width: props.panelWidth,
            padding: 15,
            height: "100vh",
            border: 'none',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        listItem: {
            width: "100%"
        },
        centered: {
            display: "block",
            textAlign: "center",
            margin: "auto"
        }
    })();

    const [isNameDialogOpen, setIsNameDialogOpen] = useState<boolean>(false);
    const [isAuthorDialogOpen, setIsAuthorDialogOpen] = useState<boolean>(false);
    const [isDescriptionDialogOpen, setIsDescriptionDialogOpen] = useState<boolean>(false);


    return <Drawer
        variant="persistent"
        open={props.isPanelOpen}
        classes={{ paper: classes.drawerPaper }}
        PaperProps={{ elevation: 10 }}
    >
        <List>
            <ListItem>
                <div className={classes.listItem}>
                    <InputTitle>Game Title</InputTitle>
                    <Typography variant="h4" className={classes.centered}>
                        {props.name}&nbsp;
                        <CreateSharp fontSize="small" onClick={() => setIsNameDialogOpen(true)} />
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
                </div>
            </ListItem>
            <ListItem>
                <div className={classes.listItem}>
                    <InputTitle>Author</InputTitle>
                    <Typography variant="body1" className={classes.centered}>
                        {props.author}&nbsp;
                        <CreateSharp fontSize="inherit" onClick={() => setIsAuthorDialogOpen(true)} />
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
                </div>
            </ListItem>
            <ListItem>
                <div className={classes.listItem}>
                    <InputTitle>Description</InputTitle>
                    <Typography variant="body1" className={classes.centered}>
                        {props.description}&nbsp;
                        <CreateSharp fontSize="inherit" onClick={() => setIsDescriptionDialogOpen(true)} />
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
                </div>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <div className={classes.listItem}>
                    <InputTitle>Choose Template</InputTitle>
                    <Select
                        className={classes.centered}
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
                </div>
            </ListItem>
            <ListItem>
                <Button
                color="primary"
                variant="contained"
                fullWidth
                    className={classes.centered}
                    component="label"
                >
                    Read from file
            <input type="file" accept="application/json" style={{ display: "none" }} onChange={(e) => {
                        const files = e.target.files
                        const file = files ? files[0] : null
                        if (file) {
                            const reader = new FileReader()
                            reader.onload = (e) => {
                                props.readFile(e.target?.result as string)
                            }
                            reader.readAsText(file, "utf-8")
                        }
                    }} />
                </Button>
            </ListItem>
            <ListItem>
                <Button 
                color="primary"
                variant="contained"
                fullWidth
                onClick={props.saveFile} className={classes.centered}>
                    Save to file
                </Button>
            </ListItem>
        </List>
    </Drawer>
}