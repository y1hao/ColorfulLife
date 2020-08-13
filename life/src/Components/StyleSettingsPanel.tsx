import React, { useState } from 'react';
import { ICellStyle, IPropertyName, IStyleSettingsPanelProps } from '../Common/Interfaces';
import { Tabs, makeStyles, Tab, Button, Slider, Popover, Modal, Switch, FormControlLabel, Select, MenuItem, RadioGroup, Radio, List, ListItem } from '@material-ui/core';
import InputTitle from './InputTitle';
import makeSettingsByPropertiesPanel from './SettingsByPropertiesPanel';
import makeSettingsByNeighborsPanel from './SettingsByNeighborsPanel';
import Random from '../Common/Random';

const useStyles = makeStyles({
    tab: {
        minWidth: 0,
        width: '50%',
        marginTop: 20
    }
})

export default function StyleSettingsPanel(props: IStyleSettingsPanelProps) {
    const classes = useStyles();
    
    const [tab, setTab] = useState<number>(0);
    const [isGroupedByProperties, setIsGroupedByProperties] = useState<boolean>(false)
    const [neighbors, setNeighbors] = useState<number>(0)
    const [propertyName, setPropertyName] = useState<IPropertyName>("size")

    const handleRandom = () => {
        for (let i = 0; i <= 1; i++) {
            for (let j = 0; j < 9; j++) {
                props.styles[i][j] = Random.style();
            }
        }
        props.setStyles([...props.styles]);
    }

    const handleReset = () => {
        props.setStyles(JSON.parse(JSON.stringify(props.template.styles)))
    }

    const NeighborsSelector = <div>
        <FormControlLabel
            labelPlacement="start"
            label="Neighbors: "
            control={
                <Select value={neighbors} onChange={(e) => setNeighbors(e.target.value as number)}>
                {
                    new Array(9).fill(0)
                    .map((v, i) => <MenuItem value={i} key={i}>{i}</MenuItem>)
                } 
                </Select>
            }
        /> 
    </div>

    const PropertyNameSelector = <div>
        <FormControlLabel 
            labelPlacement="start"
            label="Property: "
            control={
                <Select value={propertyName} onChange={(e) => setPropertyName(e.target.value as IPropertyName)}>
                    <MenuItem value="size">Size</MenuItem>
                    <MenuItem value="shape">Shape</MenuItem>
                    <MenuItem value="elevation">Elevation</MenuItem>
                    <MenuItem value="borderWidth">Border Width</MenuItem>
                    <MenuItem value="color">Color</MenuItem>
                    <MenuItem value="background">Background Color</MenuItem>
                    <MenuItem value="borderColor">Border Color</MenuItem>
                </Select>
            }
        />
    </div>

    return <div>
        <InputTitle>Group by:</InputTitle>
        <RadioGroup 
            value={isGroupedByProperties} 
            onChange={(e) => setIsGroupedByProperties((e.target as HTMLInputElement).value === "properties")}
        >
            <FormControlLabel 
                value={"neighbors"} 
                control={<Radio checked={!isGroupedByProperties}/>} 
                label="Neighbors"/>  
            <FormControlLabel 
                value={"properties"} 
                control={<Radio checked={isGroupedByProperties}/>} 
                label="Properties"/>   
        </RadioGroup>
        <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
        >
            <Tab label="Alive" className={classes.tab}/>
            <Tab label="Dead" className={classes.tab}/>
        </Tabs>    
        <div hidden={tab !== 0}>
        {
            isGroupedByProperties
            ? PropertyNameSelector
            : NeighborsSelector
        }
        {
            isGroupedByProperties
            ? makeSettingsByPropertiesPanel("alive", propertyName)(props)
            : makeSettingsByNeighborsPanel("alive", neighbors)(props)
        }
        </div>
        <div hidden={tab !== 1}>
        {
            isGroupedByProperties
            ? PropertyNameSelector
            : NeighborsSelector
        }
        {
            isGroupedByProperties
            ? makeSettingsByPropertiesPanel("dead", propertyName)(props)
            : makeSettingsByNeighborsPanel("dead", neighbors)(props)
        }
        </div>
        <List>
            <ListItem>
        <Button variant="contained" fullWidth onClick={handleReset}>
            Reset All
        </Button>
        </ListItem>
        <ListItem>
        <Button variant="contained" fullWidth onClick={handleRandom}>
            Randomise All
        </Button>
        </ListItem>
        </List>
    </div>
}