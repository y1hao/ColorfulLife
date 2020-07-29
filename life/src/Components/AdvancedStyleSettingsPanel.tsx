import React from 'react';
import { ICellConfig, ICellStyle } from '../Common/Interfaces';
import { Modal } from '@material-ui/core';

interface IProps {
    styles: ICellStyle[][],
    setStyles: (value: ICellStyle[][]) => void
}

export default function AdvancedStyleSettingsPanel(props: IProps) {
    return <Modal open={false}>
        <div>Advanced settings...</div>
    </Modal>
}