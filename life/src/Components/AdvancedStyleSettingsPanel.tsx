import React from 'react';
import { ICellConfig, ICellStyle } from '../Common/Interfaces';
import { Modal, Dialog, DialogActions, Button } from '@material-ui/core';

interface IProps {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    styles: ICellStyle[][],
    setStyles: (value: ICellStyle[][]) => void
}

export default function AdvancedStyleSettingsPanel(props: IProps) {
    return <Dialog open={props.isOpen}>
        <div>Advanced settings...</div>
        <DialogActions>
            <Button>
                Save
            </Button>
            <Button onClick={() => props.setIsOpen(false)}>
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
}