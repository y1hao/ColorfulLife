import React, { useState } from 'react';
import { ICellStyle } from '../Common/Interfaces';
import { Tabs, makeStyles, Tab } from '@material-ui/core';

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

    return <div>
        <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
        >
            <Tab label="Alive" className={classes.tab}/>
            <Tab label="Dead" className={classes.tab}/>
        </Tabs>    
        <div hidden={tab !== 0}>
            alive cells
        </div>
        <div hidden={tab !== 1}>
            dead
        </div>
    </div>
    
}