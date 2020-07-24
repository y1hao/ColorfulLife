export interface IGame {
    name: string,
    author: string,
    time: Date,
    description?: string
    refreshFrequency: number,
    width: number,
    height: number,
    seeds: boolean[][],
    underPopulationCriterion: number,
    overPupulationCriterion: number,
    borderPolicy: BorderPolicy,
    styles: Array<Array<ICellStyle>>
}

export enum BorderPolicy {alive, dead, roll}

export interface ICellStyle {
    size: number,
    color: string,
    borderRadius: number,
    borderWidth: number,
    borderColor: string,
    elevation: number
}

export interface ICellConfig {
    defaultSize: string,
    size: string,
    color: string,
    borderRadius: string,
    borderWidth: string,
    borderColor: string,
    elevation: number,
    isAlive: boolean,
    setIsAlive: (value: boolean) => void
}