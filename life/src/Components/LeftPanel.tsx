import React from 'react';
import { Drawer, Button } from '@material-ui/core';

interface IProps {
    name: string,
    setName: (value: string) => void,
    time: Date,
    author: string,
    setAuthor: (value: string) => void,
    description: string,
    setDescription: (value: string) => void
    isPlayMode: boolean,
    setIsPlayMode: (value: boolean) => void,
    isPlaying: boolean,
    isPanelOpen: boolean
}

export default function LeftPanel(props: IProps) {
    const handleSetName = (name: string) => props.setName(name);
    const handleSetDescription = (description: string) => props.setDescription(description);
    const handleSetIsPlayMode = () => props.setIsPlayMode(!props.isPlayMode);
    return <Drawer variant="persistent" open={props.isPanelOpen}>
        {
            props.isPlayMode
            ? <Button onClick={handleSetIsPlayMode}>Set Seeds</Button>
            : <Button onClick={handleSetIsPlayMode}>Done</Button>
        }
    </Drawer>
}