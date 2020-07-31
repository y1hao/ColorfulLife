import React from 'react';
import { IPropertyName, IStyleSettingsPanelProps } from '../Common/Interfaces';

export default function makeSettingsByPropertiesPanel(tabName: "alive" | "dead", property: IPropertyName) {
    return function(props: IStyleSettingsPanelProps) {
        return <div>
        </div>
    }
}