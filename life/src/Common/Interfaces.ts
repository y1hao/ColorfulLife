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
    size: string,
    color: string,
    borderRadius: string
}

export interface ICellConfig {
    defaultSize: string,
    size: string,
    color: string,
    borderRadius: string
    isAlive: boolean,
    setIsAlive: (value: boolean) => void
}