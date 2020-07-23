export interface IGame {
    name: string,
    author: string,
    time: Date,
    description?: string
    refreshFrequency: number,
    width: number,
    height: number,
    seeds: boolean[][],
    starveCriterion: number,
    reviveCriterion: number,
    borderPolicy: BorderPolicy,
    styles: Array<Array<ICellStyle>>
}

export enum BorderPolicy {alive, dead, roll}

export interface ICellStyle {
    size: string,
    color: string,
    borderRadius: string,
    borderWidth: string,
    borderColor: string
}

export interface ICellConfig {
    isPlayMode: boolean,
    defaultSize: string,
    size: string,
    color: string,
    borderRadius: string,
    borderWidth: string,
    borderColor: string,
    isAlive: boolean,
    setIsAlive: (value: boolean) => void
}