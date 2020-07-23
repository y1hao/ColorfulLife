import React from 'react';

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
    setIsPlaying: (value: boolean) => void
}

export default function LeftPanel(props: IProps) {
    return <p>Place holder for left panel</p>
}