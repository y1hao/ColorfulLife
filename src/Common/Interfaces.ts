// represent a game, contains all the information needed in a game,
// used to save and load game from a file
export interface IGame {
    name: string,
    author: string,
    time: Date,
    description: string,
    refreshFrequency: number, // 1 - 10, number of refreshes per second
    width: number, // 2 - 20, width of board
    height: number, // 2 - 20, height of board
    seeds: boolean[][],
    surviveRangeLower: number,
    surviveRangeUpper: number,
    reproductionRangeLower: number,
    reproductionRangeUpper: number,
    borderPolicy: BorderPolicy,
    styles: ICellStyle[][]
}

export type BorderPolicy = "alive" | "dead" | "roll";

// represent the style of a cell on board
export interface ICellStyle {
    size: number, // 0 - 100, percentage
    color: string,
    borderRadius: number, // 0 - 50, percentage
    borderWidth: number, // 0 - 50, percentage
    borderColor: string,
    backgroundColor: string,
    elevation: number // 0 - 10
}

// represent the processed style information for a cell on board
// all the configurations have been converted to string and can be
// directly used in CSS
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
    template: IGame,
    styles: ICellStyle[][],
    setStyles: (value: ICellStyle[][]) => void
}