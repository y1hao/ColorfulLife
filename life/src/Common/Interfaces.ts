export interface IGame {
    name: string,
    author: string,
    time: Date,
    description?: string
    refreshFrequency: number,
    width: number,
    height: number,
    seeds: Array<Array<boolean>>,
    starveCriterion: number,
    reviveCriterion: number,
    borderPolicy: BorderPolicy,
    styles: Array<Array<ICellStyle>>
}

export enum BorderPolicy {alive, dead, roll}

export interface ICellStyle {
    size: number,
    color: string,
    borderRadius: number,
    borderWidth: number,
    borderColor: string
}

export interface ICellConfig {
    isPlayMode: boolean,
    size: number,
    color: string,
    borderRadius: number,
    borderWidth: number,
    borderColor: string,
    isAlive: boolean,
    setIsAlive: (value: boolean) => void
}