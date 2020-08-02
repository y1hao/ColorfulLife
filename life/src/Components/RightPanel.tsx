import React, { ChangeEvent, useState } from 'react';
import { ICellStyle, BorderPolicy, IGame } from '../Common/Interfaces';
import { Drawer, Button, makeStyles, Accordion, AccordionSummary, AccordionDetails, Typography, Slider, RadioGroup, FormControlLabel, Radio, Paper, Tabs, Tab } from '@material-ui/core';
import InputTitle from './InputTitle';
import StyleSettingsPanel from './StyleSettingsPanel';
import Random from '../Common/Random';

interface IProps {
    panelWidth: number,
    refreshFrequency: number,
    setRefreshFrequency: (value: number) => void,
    width: number,
    setWidth: (value: number) => void,
    height: number,
    setHeight: (value: number) => void,
    surviveRangeLower: number,
    setSurviveRangeLower: (value: number) => void,
    surviveRangeUpper: number,
    setSurviveRangeUpper: (value: number) => void,
    reproductionRangeLower: number,
    setReproductionRangeLower: (value: number) => void,
    reproductionRangeUpper: number,
    setReproductionRangeUpper: (value: number) => void,
    borderPolicy: BorderPolicy,
    setBorderPolicy: (value: BorderPolicy) => void,
    styles: ICellStyle[][]
    setStyles: (value: ICellStyle[][]) => void,
    seeds: boolean[][],
    setSeeds: React.Dispatch<React.SetStateAction<boolean[][]>>,
    isPanelOpen: boolean,
    isPlayMode: boolean,
    setIsPlayMode: (value: boolean) => void,
    template: IGame
}

export default function RightPanel(props: IProps) {
    const classes = makeStyles({
        root: {
            width: props.panelWidth
        },
        drawerPaper: {
            width: props.panelWidth,
            border: 'none'
        },
        accordionDetails: {
            flexDirection: 'column' 
        }
    })();

    const [isStyleSettingsPanelExpanded, setIsStyleSettingsPanelExpanded] = useState<boolean>(false)
    const [randomSeedsDensity, setRandomSeedsDensity] = useState<number>(5)

    const handleRandomGame = () => {

    }

    const handleResetGame = () => {
        props.setBorderPolicy(props.template.borderPolicy); 
        setSize(props.template.height);
        props.setRefreshFrequency(props.template.refreshFrequency);
        props.setReproductionRangeLower(props.template.reproductionRangeLower);
        props.setReproductionRangeUpper(props.template.reproductionRangeUpper);
        props.setSurviveRangeLower(props.template.surviveRangeLower);
        props.setSurviveRangeUpper(props.template.surviveRangeUpper);
    }

    const handleRandomSeeds = () => {
        props.setSeeds(Random.seeds(props.height, props.width, randomSeedsDensity))
    }

    const handleClearSeeds = () => {
        const seeds = new Array(props.height)
        for (let i = 0; i < props.height; i++) {
            seeds[i] = new Array(props.width).fill(false)
        }
        props.setSeeds(seeds)
    }

    const handleResetSeeds = () => {
        props.setSeeds(() => {
            props.setHeight(props.template.height)
            props.setWidth(props.template.width)
            return JSON.parse(JSON.stringify(props.template.seeds))
        })
    }

    const setSize = (v: number) => {
        props.setSeeds(() => {
            props.setWidth(v);
            props.setHeight(v);
            const newSeeds = new Array(v);
            for (let i = 0; i < v; i++) {
                newSeeds[i] = new Array(v);
                for (let j = 0; j < v; j++) {
                    if (props.seeds[i] === undefined || props.seeds[i][j] === undefined) {
                        newSeeds[i][j] = false;
                    } else {
                        newSeeds[i][j] = props.seeds[i][j];
                    }
                }
            }
            return newSeeds;
        });
    }

    const GameSettingsPanel = <div>
        <InputTitle>
            Board Size
        </InputTitle>
        <Slider
            value={props.width}
            valueLabelDisplay="auto"
            min={2}
            max={20}
            onChange={(e, v) => setSize(v as number)}
        />
        <InputTitle>
            Game Speed
        </InputTitle>
        <Slider
            value={props.refreshFrequency}
            valueLabelDisplay="auto"
            min={1}
            max={10}
            onChange={(e, v) => props.setRefreshFrequency(v as number)}
        />
        <InputTitle>
            Survival Range
        </InputTitle>
        <Slider
            value={[props.surviveRangeLower, props.surviveRangeUpper]}
            valueLabelDisplay="auto"
            min={0}
            max={8}
            onChange={(e, v) => {
                props.setSurviveRangeLower((v as number[])[0]);
                props.setSurviveRangeUpper((v as number[])[1]);
            }}
        />
        <InputTitle>
            Reproduction Range
        </InputTitle>
        <Slider
            value={[props.reproductionRangeLower, props.reproductionRangeUpper]}
            valueLabelDisplay="auto"
            min={0}
            max={8}
            onChange={(e, v) => {
                props.setReproductionRangeLower((v as number[])[0]);
                props.setReproductionRangeUpper((v as number[])[1]);
            }}
        />
        <InputTitle>
            Boarder Setting
        </InputTitle>
        <RadioGroup value={props.borderPolicy} onChange={(e, v) => props.setBorderPolicy(v as "alive" | "dead" | "roll")}>
            <FormControlLabel value="alive" control={<Radio />} label="Alive" />
            <FormControlLabel value="dead" control={<Radio />} label="Dead" />
            <FormControlLabel value="roll" control={<Radio />} label="Roll over" />
        </RadioGroup>
        <Button onClick={handleResetGame}>
            Reset
        </Button>
        <Button onClick={handleRandomGame}>
            Random
        </Button>
    </div>

    const SeedsSettingsPanal = <div>
    {
        props.isPlayMode
        ? <Button onClick={() => props.setIsPlayMode(!props.isPlayMode)}>Set Seeds</Button>
        : <Button onClick={() => props.setIsPlayMode(!props.isPlayMode)}>Done</Button>
    } 
        <Button onClick={handleClearSeeds}>
            Clear All
        </Button>
        <Button onClick={handleResetSeeds}>
            Reset
        </Button>
        <Button onClick={handleRandomSeeds}>
            Random
        </Button>
        <InputTitle>Random Seeds Density</InputTitle>
        <Slider 
            value={randomSeedsDensity}
            valueLabelDisplay="auto"
            min={1}
            max={9}
            onChange={(e, v) => setRandomSeedsDensity(v as number)}
        />
    </div>

    return <Drawer 
        variant="persistent" 
        anchor="right" 
        open={props.isPanelOpen} 
        className={classes.root}
        classes={{paper: classes.drawerPaper}}
        PaperProps={{elevation: 10}}
        >
        <Typography variant="h5">Settings</Typography>
        <Accordion>
            <AccordionSummary>
                Seed Settings
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
                { SeedsSettingsPanal }
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>
                Game Settings
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
                { GameSettingsPanel }
            </AccordionDetails>
        </Accordion>
        <Accordion 
            disabled={!props.isPlayMode} 
            expanded={isStyleSettingsPanelExpanded && props.isPlayMode}
        >
            <AccordionSummary onClick={() => setIsStyleSettingsPanelExpanded(!isStyleSettingsPanelExpanded)}>
                Cell Settings
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
                <StyleSettingsPanel 
                    template={props.template}
                    styles={props.styles}
                    setStyles={props.setStyles}
                />
            </AccordionDetails>
        </Accordion>
    </Drawer>
}