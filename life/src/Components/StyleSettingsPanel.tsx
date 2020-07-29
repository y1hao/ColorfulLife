import React, { useState } from 'react';
import { ICellStyle } from '../Common/Interfaces';
import { Tabs, makeStyles, Tab, Button } from '@material-ui/core';
import AdvancedStyleSettingsPanel from './AdvancedStyleSettingsPanel';
import InputTitle from './InputTitle';

interface IProps {
    styles: ICellStyle[][],
    setStyles: (value: ICellStyle[][]) => void
}

const useStyles = makeStyles({
    tab: {
        minWidth: 0,
        width: '50%'
    }
})

export default function StyleSettingsPanel(props: IProps) {
    const classes = useStyles();
    
    const [tab, setTab] = useState<number>(0);
    const [isAdvancedSettingsOpen, setIsAdvancedSettingsOpen] = useState<boolean>(false);

    const handleSetSize = (index: number, size: number) => {

    }

    const handleSetShape = (index: number, size: number) => {

    }

    const handleSetColor = (index: number, size: number) => {

    }

    const handleSetBackground = (index: number, size: number) => {

    }

    const handleSetBorderWidth = (index: number, size: number) => {

    }

    const handleSetBorderColor = (index: number, size: number) => {

    }

    const handleSetElevation = (index: number, size: number) => {

    }

    const Settings = (tabName: "alive" | "dead") => {
        const index = tabName === "dead" ? 0 : 1
        return <div>
            <InputTitle>
                Size
            </InputTitle>

            <InputTitle>
                Shape
            </InputTitle>

            <InputTitle>
                Color
            </InputTitle>

            <InputTitle>
                Background
            </InputTitle>

            <InputTitle>
                Border Color
            </InputTitle>

            <InputTitle>
                Border Width
            </InputTitle>

            <InputTitle>
                Elevation
            </InputTitle>
        </div> 
    }

    return <div>
        <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
        >
            <Tab label="Alive" className={classes.tab}/>
            <Tab label="Dead" className={classes.tab}/>
        </Tabs>    
        <div hidden={tab !== 0}>
            { Settings("alive") }
        </div>
        <div hidden={tab !== 1}>
            { Settings("dead") }
        </div>
        <Button onClick={() => setIsAdvancedSettingsOpen(true)}>
            Advanced Settings
        </Button>
        <AdvancedStyleSettingsPanel 
            isOpen={isAdvancedSettingsOpen}
            setIsOpen={setIsAdvancedSettingsOpen}
            styles={props.styles}
            setStyles={props.setStyles}
        />
    </div>
    
}