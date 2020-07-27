import React from 'react';
import { BorderPolicy, ICellStyle } from '../Common/Interfaces';
import { Drawer, Button, makeStyles, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import InputTitle from './InputTitle';

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
    isPanelOpen: boolean,
    isPlayMode: boolean,
    setIsPlayMode: (value: boolean) => void
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

    return <Drawer 
        variant="persistent" 
        anchor="right" 
        open={props.isPanelOpen} 
        className={classes.root}
        classes={{paper: classes.drawerPaper}}
        PaperProps={{elevation: 5}}
        >
        <Accordion>
            <AccordionSummary>
                Game Settings
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
                <InputTitle>
                    Board Size
                </InputTitle>


                <InputTitle>
                    Game Speed
                </InputTitle>


                <InputTitle>
                    Survive Lower Limit
                </InputTitle>


                <InputTitle>
                    Survive Upper Limit
                </InputTitle>


                <InputTitle>
                    Reproduction Lower Limit
                </InputTitle>


                <InputTitle>
                    Reproduction Upper Limit
                </InputTitle>


                <InputTitle>
                    Boarder Setting
                </InputTitle>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>
                Cell Settings
            </AccordionSummary>
            <AccordionDetails>

            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>
                Seeds
            </AccordionSummary>
            <AccordionDetails>
                
            </AccordionDetails>
        </Accordion>

        {
            props.isPlayMode
            ? <Button onClick={() => props.setIsPlayMode(!props.isPlayMode)}>Set Seeds</Button>
            : <Button onClick={() => props.setIsPlayMode(!props.isPlayMode)}>Done</Button>
        }
    </Drawer>
}