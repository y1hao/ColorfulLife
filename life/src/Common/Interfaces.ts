export interface IGame {
    name: string,
    author: string,
    time: Date,
    description?: string,
    refreshFrequency: number,
    width: number,
    height: number,
    seeds: boolean[][],
    surviveRangeLower: number,
    surviveRangeUpper: number,
    reproductionRangeLower: number,
    reproductionRangeUpper: number,
    borderPolicy: BorderPolicy,
    styles: ICellStyle[][]
}

export type BorderPolicy = "alive" | "dead" | "roll";

export interface ICellStyle {
    size: number,
    color: string,
    borderRadius: number,
    borderWidth: number,
    borderColor: string,
    backgroundColor: string,
    elevation: number
}

export interface ICellConfig {
    defaultSize: string,
    size: string,
    color: string,
    borderRadius: string,
    borderWidth: string,
    borderColor: string,
    backgroundColor: string,
    elevation: number,
    isAlive: boolean,
    setIsAlive: (value: boolean) => void
}

export type IPropertyName = 
    "size" | "color" | "background" | "borderColor" | "borderWidth" | "shape" | "elevation" 

export interface IStyleSettingsPanelProps {
    styles: ICellStyle[][],
    setStyles: (value: ICellStyle[][]) => void
}